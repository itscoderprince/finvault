"use client";

import React from "react";
import {
  Wallet,
  TrendingUp,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  MoreHorizontal,
  Plus
} from "lucide-react";
import Link from "next/link";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Overview</h2>
          <p className="text-sm text-muted-foreground">
            Manage your investments and track your performance.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
          <Button size="sm" asChild>
            <Link href="/investments">
              <Plus className="mr-2 h-4 w-4" />
              New Investment
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450.00</div>
            <p className="text-xs text-muted-foreground mt-1">
              +2.4% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Investments</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8,200.00</div>
            <p className="text-xs text-muted-foreground mt-1">
              Across 3 index funds
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weekly Returns</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+$145.50</div>
            <p className="text-xs text-muted-foreground mt-1">
              +12.5% compared to last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Cash</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,250.00</div>
            <div className="flex items-center text-xs text-muted-foreground mt-1 gap-1">
              <span className="text-emerald-500 font-medium">Ready to invest</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-4">
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>
              Your portfolio growth over the last 30 days.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            {/* Minimal CSS Placeholder for Chart */}
            <div className="h-[250px] w-full flex items-end justify-between px-4 gap-2">
              {[40, 65, 45, 80, 55, 90, 75, 40, 85, 60, 100, 70].map((height, i) => (
                <div key={i} className="w-full bg-secondary rounded-sm relative group cursor-pointer transition-all hover:bg-primary/20">
                  <div 
                    className="absolute bottom-0 w-full bg-primary rounded-sm transition-all duration-300"
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-muted-foreground px-4 mt-4 border-t pt-4">
              <span>May 1</span>
              <span>May 15</span>
              <span>May 30</span>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest transactions in your account.
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/transactions">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <TransactionItem
                title="Deposit via ACH"
                date="Today, 10:24 AM"
                amount="+$500.00"
                type="credit"
              />
              <TransactionItem
                title="AI Tech Index Investment"
                date="Yesterday, 2:15 PM"
                amount="-$1,200.00"
                type="debit"
              />
              <TransactionItem
                title="Weekly Return Payout"
                date="May 04, 2026"
                amount="+$45.50"
                type="credit"
              />
              <TransactionItem
                title="Withdrawal to Bank ****4592"
                date="May 02, 2026"
                amount="-$200.00"
                type="debit"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Portfolios</CardTitle>
          <CardDescription>
            Manage and track your current investments.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Index Fund</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden sm:table-cell">Invested</TableHead>
                  <TableHead className="hidden md:table-cell">ROI</TableHead>
                  <TableHead className="text-right">Current Value</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">AI Tech Growth</div>
                    <div className="text-xs text-muted-foreground md:hidden">1.8% Weekly ROI</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="font-normal text-xs">Active</Badge>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-muted-foreground">$5,000.00</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <span className="text-emerald-500 font-medium text-sm">1.8%</span>
                  </TableCell>
                  <TableCell className="text-right font-medium">$5,450.00</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Invest More</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Withdraw</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Real Estate Prime</div>
                    <div className="text-xs text-muted-foreground md:hidden">2.1% Weekly ROI</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-normal text-xs bg-amber-500/10 text-amber-600 border-amber-500/20">Pending</Badge>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-muted-foreground">$3,200.00</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <span className="text-emerald-500 font-medium text-sm">2.1%</span>
                  </TableCell>
                  <TableCell className="text-right font-medium">$3,200.00</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Status</DropdownMenuItem>
                        <DropdownMenuItem>Cancel Request</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function TransactionItem({ title, date, amount, type }) {
  const isCredit = type === "credit";
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`flex h-9 w-9 items-center justify-center rounded-full border ${isCredit ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600' : 'bg-muted border-border text-muted-foreground'}`}>
          {isCredit ? <ArrowDownRight className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium leading-none">{title}</span>
          <span className="text-xs text-muted-foreground mt-1.5">{date}</span>
        </div>
      </div>
      <div className={`text-sm font-medium ${isCredit ? 'text-emerald-600' : ''}`}>
        {amount}
      </div>
    </div>
  );
}
