"use client";

import React, { useState } from "react";
import { 
  Check, 
  Upload, 
  User, 
  FileText, 
  Camera, 
  Building, 
  ArrowRight, 
  ArrowLeft,
  Loader2,
  ShieldAlert
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function KYCPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    address: "",
    idType: "pan",
    idNumber: "",
    idFront: null,
    idBack: null,
    selfie: null,
    bankName: "",
    accountNumber: "",
    ifsc: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [kycCompleted, setKycCompleted] = useState(false);

  const steps = [
    { id: 1, label: "Personal Info", icon: User },
    { id: 2, label: "Document Upload", icon: FileText },
    { id: 3, label: "Selfie Verify", icon: Camera },
    { id: 4, label: "Bank Details", icon: Building }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (name, file) => {
    setFormData(prev => ({ ...prev, [name]: file }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    setSubmitting(true);
    // Simulate API upload
    setTimeout(() => {
      setSubmitting(false);
      setKycCompleted(true);
    }, 2000);
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Identity Verification</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Complete your KYC verification to access index investments and wallet withdrawals.
        </p>
      </div>

      {/* Steps Indicator */}
      <div className="border border-border bg-card rounded-xl p-4 sm:p-6 shadow-xs">
        <div className="flex items-center justify-between relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-muted -translate-y-1/2 z-0 hidden sm:block" />
          <div 
            className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 z-0 hidden sm:block transition-all duration-300"
            style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = currentStep > step.id || kycCompleted;
            const isActive = currentStep === step.id && !kycCompleted;

            return (
              <div key={step.id} className="flex flex-col items-center z-10 relative flex-1">
                <div 
                  className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border transition-all ${
                    isCompleted 
                      ? "bg-primary border-primary text-primary-foreground" 
                      : isActive 
                        ? "bg-background border-primary text-primary shadow-xs ring-2 ring-primary/20" 
                        : "bg-muted border-muted text-muted-foreground"
                  }`}
                >
                  {isCompleted ? <Check className="h-4 w-4 sm:h-5 sm:w-5" /> : <Icon className="h-4 w-4 sm:h-5 sm:w-5" />}
                </div>
                <span className={`text-[10px] sm:text-xs font-medium mt-2 hidden sm:block ${isActive ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {kycCompleted ? (
        <Card className="border-emerald-500/20 bg-emerald-500/5 text-center p-8 sm:p-12">
          <CardHeader className="flex flex-col items-center">
            <div className="h-16 w-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-4">
              <Check className="h-8 w-8" />
            </div>
            <CardTitle className="text-2xl font-bold">KYC Submitted Successfully</CardTitle>
            <CardDescription className="max-w-md mx-auto mt-2 text-sm text-emerald-700/80">
              Your documents have been securely uploaded and are under review. This process typically takes 1-3 business days.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Under Verification
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <Button asChild>
              <a href="/dashboard">Return to Dashboard</a>
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card className="border-border">
          <CardHeader>
            <CardTitle>{steps[currentStep - 1].label}</CardTitle>
            <CardDescription>
              {currentStep === 1 && "Please enter your legally registered personal information."}
              {currentStep === 2 && "Upload high-quality photo of your government ID."}
              {currentStep === 3 && "Take or upload a selfie matching your official document."}
              {currentStep === 4 && "Provide bank details for fast dividend payouts."}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="fullName">Full Name (As on Government ID)</Label>
                  <Input 
                    id="fullName" 
                    name="fullName" 
                    placeholder="John Doe" 
                    value={formData.fullName} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input 
                    id="dob" 
                    name="dob" 
                    type="date" 
                    value={formData.dob} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">Permanent Address</Label>
                  <Input 
                    id="address" 
                    name="address" 
                    placeholder="123 Street name, City, State" 
                    value={formData.address} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Document Type</Label>
                  <Select 
                    value={formData.idType} 
                    onValueChange={(val) => setFormData(p => ({ ...p, idType: val }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select ID Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pan">PAN Card</SelectItem>
                      <SelectItem value="aadhaar">Aadhaar Card</SelectItem>
                      <SelectItem value="passport">Passport</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="idNumber">Document Number</Label>
                  <Input 
                    id="idNumber" 
                    name="idNumber" 
                    placeholder="Enter document number" 
                    value={formData.idNumber} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <FileUploader 
                    label="Front Side Photo" 
                    file={formData.idFront} 
                    onChange={(file) => handleFileChange("idFront", file)} 
                  />
                  <FileUploader 
                    label="Back Side Photo" 
                    file={formData.idBack} 
                    onChange={(file) => handleFileChange("idBack", file)} 
                  />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="flex flex-col items-center justify-center py-6 gap-4">
                <div className="h-40 w-40 rounded-full border-2 border-dashed border-muted-foreground/30 flex flex-col items-center justify-center bg-muted/20 relative overflow-hidden group">
                  {formData.selfie ? (
                    <img 
                      src={URL.createObjectURL(formData.selfie)} 
                      alt="Selfie preview" 
                      className="h-full w-full object-cover" 
                    />
                  ) : (
                    <Camera className="h-10 w-10 text-muted-foreground" />
                  )}
                </div>
                
                <div className="text-center space-y-1">
                  <p className="text-sm font-medium">Capture a clear selfie</p>
                  <p className="text-xs text-muted-foreground max-w-xs">
                    Ensure your face is well-lit and fully visible within the frame. No hats or sunglasses.
                  </p>
                </div>

                <div className="relative">
                  <input 
                    type="file" 
                    accept="image/*" 
                    id="selfie-input" 
                    className="absolute inset-0 opacity-0 cursor-pointer h-full w-full"
                    onChange={(e) => handleFileChange("selfie", e.target.files[0])}
                  />
                  <Button variant="outline" className="relative pointer-events-none">
                    <Upload className="mr-2 h-4 w-4" /> Upload Selfie Photo
                  </Button>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="bankName">Bank Name</Label>
                  <Input 
                    id="bankName" 
                    name="bankName" 
                    placeholder="e.g. JPMorgan Chase" 
                    value={formData.bankName} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="accountNumber">Account Number</Label>
                  <Input 
                    id="accountNumber" 
                    name="accountNumber" 
                    placeholder="Enter account number" 
                    value={formData.accountNumber} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="ifsc">Routing Number / IFSC Code</Label>
                  <Input 
                    id="ifsc" 
                    name="ifsc" 
                    placeholder="Enter routing number or IFSC code" 
                    value={formData.ifsc} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex items-center justify-between border-t pt-6 bg-muted/10">
            <Button 
              variant="ghost" 
              onClick={handleBack} 
              disabled={currentStep === 1 || submitting}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            
            <Button 
              onClick={handleNext} 
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                </>
              ) : currentStep === 4 ? (
                <>
                  Submit KYC <ArrowRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* Security note */}
      <div className="flex items-start gap-3 p-4 bg-muted/40 border border-border rounded-xl">
        <ShieldAlert className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="text-xs font-semibold">Bank-grade Security Protocols</p>
          <p className="text-[11px] text-muted-foreground">
            Your personal data and verified documents are protected by end-to-end encryption. Information is solely processed for mandatory anti-money laundering compliance.
          </p>
        </div>
      </div>
    </div>
  );
}

function FileUploader({ label, file, onChange }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="border border-dashed border-muted-foreground/30 rounded-xl p-6 flex flex-col items-center justify-center bg-muted/10 relative hover:bg-muted/20 transition-all cursor-pointer min-h-[140px]">
        <input 
          type="file" 
          accept="image/*,.pdf" 
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
          onChange={(e) => onChange(e.target.files[0])}
        />
        
        {file ? (
          <div className="text-center space-y-1">
            <Check className="h-8 w-8 text-emerald-500 mx-auto" />
            <p className="text-xs font-medium text-foreground truncate max-w-[150px]">{file.name}</p>
            <p className="text-[10px] text-muted-foreground">Click to replace</p>
          </div>
        ) : (
          <div className="text-center space-y-2">
            <Upload className="h-6 w-6 text-muted-foreground mx-auto" />
            <div>
              <p className="text-xs font-semibold">Click to upload file</p>
              <p className="text-[10px] text-muted-foreground mt-1">PNG, JPG or PDF up to 5MB</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
