"use client";

import React from "react";
import { 
  Search, 
  Filter, 
  Download, 
  ArrowUpRight, 
  ArrowDownRight, 
  Clock, 
  CheckCircle2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Transactions</h2>
          <p className="text-sm text-muted-foreground mt-1">
            View and download your full transaction history.
          </p>
        </div>
        
        <Button variant="outline" size="sm" className="w-fit">
          <Download className="mr-2 h-4 w-4" /> Export CSV
        </Button>
      </div>

      <Card>
        {/* Filters and Search */}
        <div className="p-4 border-b flex flex-col sm:flex-row gap-4 justify-between items-center bg-muted/40">
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 [scrollbar-width:none]">
            <Button variant="default" size="sm" className="rounded-full">All Types</Button>
            <Button variant="ghost" size="sm" className="rounded-full text-muted-foreground">Deposits</Button>
            <Button variant="ghost" size="sm" className="rounded-full text-muted-foreground">Withdrawals</Button>
            <Button variant="ghost" size="sm" className="rounded-full text-muted-foreground">Investments</Button>
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search transactions..." 
                className="w-full pl-8 bg-background"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Transactions Table */}
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Transaction</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ref ID</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TransactionTableRow 
                  title="Deposit via Bank Transfer"
                  type="credit"
                  category="Deposit"
                  date="May 08, 2026"
                  time="10:24 AM"
                  amount="+$500.00"
                  status="Completed"
                  refId="TXN-98234-A"
                />
                <TransactionTableRow 
                  title="Investment - AI Tech Growth"
                  type="debit"
                  category="Investment"
                  date="May 07, 2026"
                  time="2:15 PM"
                  amount="-$1,200.00"
                  status="Completed"
                  refId="TXN-44912-X"
                />
                <TransactionTableRow 
                  title="Weekly Return - Real Estate"
                  type="credit"
                  category="Profit"
                  date="May 04, 2026"
                  time="9:00 AM"
                  amount="+$45.50"
                  status="Completed"
                  refId="TXN-11029-R"
                />
                <TransactionTableRow 
                  title="Withdrawal to Bank ****4592"
                  type="debit"
                  category="Withdrawal"
                  date="May 02, 2026"
                  time="4:30 PM"
                  amount="-$200.00"
                  status="Completed"
                  refId="TXN-88231-W"
                />
                <TransactionTableRow 
                  title="Deposit via UPI"
                  type="credit"
                  category="Deposit"
                  date="Apr 28, 2026"
                  time="9:15 AM"
                  amount="+$1,000.00"
                  status="Completed"
                  refId="TXN-77341-U"
                />
                <TransactionTableRow 
                  title="Withdrawal to Bank ****4592"
                  type="debit"
                  category="Withdrawal"
                  date="Apr 25, 2026"
                  time="11:20 AM"
                  amount="-$150.00"
                  status="Processing"
                  isPending={true}
                  refId="TXN-66123-W"
                />
              </TableBody>
            </Table>
          </div>
        </CardContent>
        
        {/* Pagination */}
        <div className="p-4 border-t flex items-center justify-between text-sm bg-muted/20">
          <span className="text-muted-foreground">Showing 1 to 6 of 24 transactions</span>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

function TransactionTableRow({ title, type, category, date, time, amount, status, isPending, refId }) {
  const isCredit = type === "credit";
  
  return (
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-3">
          <div className={`flex h-9 w-9 items-center justify-center rounded-full border shrink-0 ${isCredit ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600' : 'bg-muted border-border text-muted-foreground'}`}>
            {isCredit ? <ArrowDownRight className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium leading-none truncate max-w-[200px] sm:max-w-[300px]">{title}</span>
            <span className="text-xs text-muted-foreground mt-1.5">{category}</span>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="text-sm">{date}</div>
        <div className="text-xs text-muted-foreground mt-1">{time}</div>
      </TableCell>
      <TableCell>
        <div className={`text-sm font-medium ${isCredit ? 'text-emerald-600' : ''}`}>
          {amount}
        </div>
      </TableCell>
      <TableCell>
        {isPending ? (
          <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/20 font-normal">
            <Clock className="mr-1 h-3 w-3" /> Processing
          </Badge>
        ) : (
          <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 font-normal">
            <CheckCircle2 className="mr-1 h-3 w-3" /> Completed
          </Badge>
        )}
      </TableCell>
      <TableCell className="text-right font-mono text-xs text-muted-foreground">
        {refId}
      </TableCell>
    </TableRow>
  );
}
