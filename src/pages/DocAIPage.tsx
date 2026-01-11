import { useState } from "react";
import { Upload, FileText, Download, CheckCircle, AlertCircle, ChevronDown, FileJson, FileSpreadsheet, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface ExtractionResult {
  gstin?: string;
  supplier_gstin?: { value: string };
  customer_gstin?: { value: string };
  vat_number?: string;
  invoice_number?: string;
  grand_total?: string;
  currency?: string;
  bank_name?: string;
  account_number?: string;
  ifsc_code?: string;
  [key: string]: any;
}

const DocAIPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<{ fileName: string; result: ExtractionResult }[]>([]);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [isFieldDropdownOpen, setIsFieldDropdownOpen] = useState(false);
  const [isExportDropdownOpen, setIsExportDropdownOpen] = useState(false);
  const [isFileNameDialogOpen, setIsFileNameDialogOpen] = useState(false);
  const [exportFileName, setExportFileName] = useState("");
  const [exportFormat, setExportFormat] = useState<"json" | "csv" | "excel" | null>(null);
  const { toast } = useToast();

  const availableFields = [
    { id: "gstin", label: "GSTIN" },
    { id: "vat_number", label: "VAT Number" },
    { id: "invoice_number", label: "Invoice Number" },
    { id: "grand_total", label: "Grand Total" },
    { id: "currency", label: "Currency" },
    { id: "bank_name", label: "Bank Name" },
    { id: "account_number", label: "Account Number" },
    { id: "ifsc_code", label: "IFSC Code" },
  ];

  // TODO: Replace with your actual backend URL
  // Example: "https://your-backend-api.com/extract"
  const BACKEND_URL = "https://1nbnzwhr-5000.inc1.devtunnels.ms";

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    if (selectedFiles.length > 5) {
      setError("Please select up to 5 files only.");
      return;
    }
    setFiles(selectedFiles);
    setError(null);
    setResults([]);
  };

  const processFiles = async () => {
    if (files.length === 0) return;

    setIsProcessing(true);
    setProgress(0);
    setError(null);
    setResults([]);

    try {
      const newResults: { fileName: string; result: ExtractionResult }[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const formData = new FormData();
        formData.append("file", file);

        setProgress((i / files.length) * 50); // 50% for upload/setup

        const response = await fetch(`${BACKEND_URL}/extract`, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`Failed to process ${file.name}: ${response.statusText}`);
        }

        const result = await response.json();
        newResults.push({ fileName: file.name, result });

        setProgress(((i + 1) / files.length) * 100);
      }

      setResults(newResults);
      toast({
        title: "Extraction Complete!",
        description: `Successfully processed ${files.length} file(s).`,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred during processing.");
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadAllResults = () => {
    const allData = results.map(({ fileName, result }) => {
      const fileData: any = { fileName };
      
      selectedFields.forEach((field) => {
        if (field === "gstin") {
          const hasSupplierGSTIN = result.supplier_gstin?.value;
          const hasCustomerGSTIN = result.customer_gstin?.value;
          
          if ((hasSupplierGSTIN || hasCustomerGSTIN) && !(hasSupplierGSTIN && hasCustomerGSTIN)) {
            fileData.gstin = hasSupplierGSTIN || hasCustomerGSTIN;
          } else {
            if (hasSupplierGSTIN) {
              fileData.supplier_gstin = hasSupplierGSTIN;
            }
            if (hasCustomerGSTIN) {
              fileData.customer_gstin = hasCustomerGSTIN;
            }
          }
        } else {
          fileData[field] = (result as any)[field] || null;
        }
      });
      
      return fileData;
    });
    
    const jsonData = JSON.stringify(allData, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${exportFileName || `extracted_data_${new Date().toISOString().slice(0, 10)}`}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadAsCSV = () => {
    let csvContent = "File Name,Field,Value\n";

    results.forEach(({ fileName, result }) => {
      selectedFields.forEach((field) => {
        if (field === "gstin") {
          const hasSupplierGSTIN = result.supplier_gstin?.value;
          const hasCustomerGSTIN = result.customer_gstin?.value;

          if ((hasSupplierGSTIN || hasCustomerGSTIN) && !(hasSupplierGSTIN && hasCustomerGSTIN)) {
            const singleGSTIN = hasSupplierGSTIN || hasCustomerGSTIN;
            csvContent += `"${fileName}","GSTIN","${String(singleGSTIN).replace(/"/g, '""')}"\n`;
          } else {
            if (hasSupplierGSTIN) {
              csvContent += `"${fileName}","Supplier GSTIN","${String(hasSupplierGSTIN).replace(/"/g, '""')}"\n`;
            }
            if (hasCustomerGSTIN) {
              csvContent += `"${fileName}","Customer GSTIN","${String(hasCustomerGSTIN).replace(/"/g, '""')}"\n`;
            }
          }
        } else {
          let value = (result as any)[field] || "";
          const fieldLabel = availableFields.find((f) => f.id === field)?.label || field;
          csvContent += `"${fileName}","${fieldLabel}","${String(value).replace(/"/g, '""')}"\n`;
        }
      });
    });

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${exportFileName || `extracted_data_${new Date().toISOString().slice(0, 10)}`}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadAsExcel = async () => {
    // Dynamically import xlsx only when needed
    const XLSX = await import("xlsx");

    const data: (string | number | null)[][] = [];

    // Build dynamic headers based on selected fields
    const headers = ["File Name"];
    selectedFields.forEach((field) => {
      if (field === "gstin") {
        headers.push("GSTIN");
      } else {
        const fieldLabel = availableFields.find((f) => f.id === field)?.label || field;
        headers.push(fieldLabel);
      }
    });
    data.push(headers);

    // Add rows with proper handling of GSTIN variants
    results.forEach(({ fileName, result }) => {
      const baseRow: (string | number | null)[] = [fileName];
      let hasGSTINField = false;

      selectedFields.forEach((field) => {
        if (field === "gstin") {
          hasGSTINField = true;
          const hasSupplierGSTIN = result.supplier_gstin?.value;
          const hasCustomerGSTIN = result.customer_gstin?.value;

          if ((hasSupplierGSTIN || hasCustomerGSTIN) && !(hasSupplierGSTIN && hasCustomerGSTIN)) {
            const singleGSTIN = hasSupplierGSTIN || hasCustomerGSTIN;
            baseRow.push(singleGSTIN || null);
          } else if (hasSupplierGSTIN && hasCustomerGSTIN) {
            baseRow.push(`Supplier: ${hasSupplierGSTIN}, Customer: ${hasCustomerGSTIN}`);
          } else if (hasSupplierGSTIN) {
            baseRow.push(`Supplier: ${hasSupplierGSTIN}`);
          } else if (hasCustomerGSTIN) {
            baseRow.push(`Customer: ${hasCustomerGSTIN}`);
          } else {
            baseRow.push(null);
          }
        } else {
          const value = (result as any)[field] || null;
          baseRow.push(value);
        }
      });

      data.push(baseRow);
    });

    // Create workbook
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    
    // Auto-adjust column widths
    const colWidths = headers.map((header) => ({ wch: Math.max(header.toString().length + 2, 15) }));
    worksheet["!cols"] = colWidths;

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Extracted Data");

    // Download
    XLSX.writeFile(workbook, `${exportFileName || `extracted_data_${new Date().toISOString().slice(0, 10)}`}.xlsx`);
  };

  const renderGSTINSection = (result: ExtractionResult) => {
    if (!selectedFields.includes("gstin")) return null;

    const hasSupplierGSTIN = result.supplier_gstin?.value;
    const hasCustomerGSTIN = result.customer_gstin?.value;

    // If only one GSTIN exists, display as "GSTIN"
    if ((hasSupplierGSTIN || hasCustomerGSTIN) && !(hasSupplierGSTIN && hasCustomerGSTIN)) {
      const singleGSTIN = hasSupplierGSTIN || hasCustomerGSTIN;
      return (
        <div className="flex justify-between">
          <span className="font-medium">GSTIN:</span>
          <span>{singleGSTIN || "N/A"}</span>
        </div>
      );
    }

    // If both exist, show with labels
    return (
      <>
        {hasSupplierGSTIN && (
          <div className="flex justify-between">
            <span className="font-medium">Supplier GSTIN:</span>
            <span>{hasSupplierGSTIN}</span>
          </div>
        )}
        {hasCustomerGSTIN && (
          <div className="flex justify-between">
            <span className="font-medium">Customer GSTIN:</span>
            <span>{hasCustomerGSTIN}</span>
          </div>
        )}
      </>
    );
  };

  const toggleField = (fieldId: string) => {
    setSelectedFields((prev) =>
      prev.includes(fieldId) ? prev.filter((f) => f !== fieldId) : [...prev, fieldId]
    );
  };

  const toggleSelectAll = () => {
    if (selectedFields.length === availableFields.length) {
      // If all selected, deselect all
      setSelectedFields([]);
    } else {
      // If not all selected, select all
      setSelectedFields(availableFields.map((f) => f.id));
    }
  };

  const handleExport = async () => {
    if (exportFormat === "json") {
      downloadAllResults();
    } else if (exportFormat === "csv") {
      downloadAsCSV();
    } else if (exportFormat === "excel") {
      await downloadAsExcel();
    }
    setIsFileNameDialogOpen(false);
    toast({
      title: "Export Complete!",
      description: `File downloaded as ${exportFileName || `extracted_data_${new Date().toISOString().slice(0, 10)}`}.${exportFormat}`,
    });
  };

  const renderField = (fieldId: string, value: any, label: string) => {
    if (!selectedFields.includes(fieldId)) return null;

    return (
      <div key={fieldId} className="flex justify-between">
        <span className="font-medium">{label}:</span>
        <span>{value || "N/A"}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-6 md:py-12 px-3 sm:px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-2 md:mb-4 tracking-wider">
            Doc AI - Invoice Data Extraction
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Upload PDF or image files to automatically extract key data from invoices and documents.
            Process up to 5 files at once.
          </p>
        </div>

        <Card className="mb-6 md:mb-8">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Upload className="h-4 w-4 sm:h-5 sm:w-5" />
              Upload Files
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-4 sm:p-6">
            <div className="border-2 border-dashed border-primary/20 rounded-lg p-6 sm:p-8 text-center hover:border-primary/40 transition-colors">
              <input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
                disabled={isProcessing}
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <FileText className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-4 text-primary" />
                <p className="text-base sm:text-lg font-medium mb-2">
                  {files.length > 0 ? `${files.length} file(s) selected` : "Click to select files"}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  PDF, JPG, JPEG, PNG (max 5 files)
                </p>
              </label>
            </div>

            {files.length > 0 && (
              <div className="space-y-2">
                <p className="font-medium text-sm sm:text-base">Selected files:</p>
                <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                  {files.map((file, index) => (
                    <li key={index} className="flex items-center gap-2 truncate">
                      <FileText className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="truncate">{file.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {error && (
              <Alert variant="destructive" className="text-xs sm:text-sm">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <label className="font-medium text-sm sm:text-base">Select Fields to Extract:</label>
                <Button
                  variant="outline"
                  onClick={() => setIsFieldDropdownOpen(!isFieldDropdownOpen)}
                  className="flex items-center gap-2 text-xs sm:text-sm w-full sm:w-auto"
                  size="sm"
                >
                  Fields ({selectedFields.length})
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
              {isFieldDropdownOpen && (
                <div className="border border-border rounded-lg p-4 bg-card space-y-3 max-h-64 overflow-y-auto">
                  <div className="flex items-center space-x-2 pb-2 border-b border-border/50">
                    <Checkbox
                      id="select-all-fields"
                      checked={selectedFields.length === availableFields.length && availableFields.length > 0}
                      indeterminate={selectedFields.length > 0 && selectedFields.length < availableFields.length}
                      onCheckedChange={toggleSelectAll}
                    />
                    <label htmlFor="select-all-fields" className="text-xs sm:text-sm font-medium cursor-pointer">
                      Select All
                    </label>
                  </div>
                  {availableFields.map((field) => (
                    <div key={field.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={field.id}
                        checked={selectedFields.includes(field.id)}
                        onCheckedChange={() => toggleField(field.id)}
                      />
                      <label htmlFor={field.id} className="text-xs sm:text-sm cursor-pointer">
                        {field.label}
                      </label>
                    </div>
                  ))}
                </div>
              )}
              {selectedFields.length === 0 && (
                <Alert variant="destructive" className="text-xs sm:text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>Please select at least one field to extract.</AlertDescription>
                </Alert>
              )}
            </div>

            <Button
              onClick={processFiles}
              disabled={files.length === 0 || isProcessing || selectedFields.length === 0}
              className="w-full text-sm sm:text-base"
              size="lg"
            >
              {isProcessing ? "Processing..." : "Extract Data"}
            </Button>

            {isProcessing && (
              <div className="space-y-2">
                <Progress value={progress} className="w-full" />
                <p className="text-xs sm:text-sm text-center text-muted-foreground">
                  Processing files... {Math.round(progress)}%
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {results.length > 0 && (
          <div className="space-y-4 md:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold">Extraction Results</h2>
              <div className="relative w-full sm:w-auto">
                <Button
                  variant="outline"
                  onClick={() => setIsExportDropdownOpen(!isExportDropdownOpen)}
                  className="flex items-center gap-2 text-xs sm:text-sm w-full sm:w-auto"
                >
                  <Download className="h-4 w-4" />
                  Export Results
                  <ChevronDown className="h-4 w-4" />
                </Button>
                {isExportDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-full sm:w-48 bg-background border border-border rounded-lg shadow-lg z-10">
                    <div className="p-2 space-y-1">
                      <button
                        onClick={() => {
                          setExportFormat("json");
                          setExportFileName("");
                          setIsFileNameDialogOpen(true);
                          setIsExportDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-xs sm:text-sm hover:bg-accent rounded-md flex items-center gap-2 transition-colors"
                      >
                        <FileJson className="h-4 w-4" />
                        Export as JSON
                      </button>
                      <button
                        onClick={() => {
                          setExportFormat("csv");
                          setExportFileName("");
                          setIsFileNameDialogOpen(true);
                          setIsExportDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-xs sm:text-sm hover:bg-accent rounded-md flex items-center gap-2 transition-colors"
                      >
                        <FileSpreadsheet className="h-4 w-4" />
                        Export as CSV
                      </button>
                      <button
                        onClick={() => {
                          setExportFormat("excel");
                          setExportFileName("");
                          setIsFileNameDialogOpen(true);
                          setIsExportDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-xs sm:text-sm hover:bg-accent rounded-md flex items-center gap-2 transition-colors"
                      >
                        <FileSpreadsheet className="h-4 w-4" />
                        Export as Excel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {results.map(({ fileName, result }, index) => (
              <Card key={index}>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg break-words">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                    <span className="truncate">{fileName}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2 text-xs sm:text-sm">
                      {renderGSTINSection(result)}
                      {renderField("vat_number", result.vat_number, "VAT Number")}
                    </div>
                    <div className="space-y-2 text-xs sm:text-sm">
                      {renderField("invoice_number", result.invoice_number, "Invoice Number")}
                      {renderField("grand_total", result.grand_total, "Grand Total")}
                      {renderField("currency", result.currency, "Currency")}
                      {renderField("bank_name", result.bank_name, "Bank Name")}
                      {renderField("account_number", result.account_number, "Account Number")}
                      {renderField("ifsc_code", result.ifsc_code, "IFSC Code")}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* File Name Dialog */}
        {isFileNameDialogOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsFileNameDialogOpen(false)} />
            <Card className="relative z-10 w-full max-w-sm">
              <CardHeader className="flex items-center justify-between p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl">Enter File Name</CardTitle>
                <button
                  onClick={() => setIsFileNameDialogOpen(false)}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  <X size={20} />
                </button>
              </CardHeader>
              <CardContent className="space-y-4 p-4 sm:p-6">
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-medium">File Name</label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="text"
                      placeholder="Enter file name"
                      value={exportFileName}
                      onChange={(e) => setExportFileName(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleExport();
                        }
                      }}
                      className="flex-1 text-xs sm:text-sm"
                    />
                    <span className="text-xs sm:text-sm text-muted-foreground flex-shrink-0">
                      .{exportFormat}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground break-words">
                    {exportFileName || "extracted_data"}.{exportFormat}
                  </p>
                </div>
                <div className="flex gap-2 justify-end flex-col-reverse sm:flex-row">
                  <Button
                    variant="outline"
                    onClick={() => setIsFileNameDialogOpen(false)}
                    className="text-xs sm:text-sm w-full sm:w-auto"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleExport}
                    className="text-xs sm:text-sm w-full sm:w-auto"
                  >
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};


export default DocAIPage;
