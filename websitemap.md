```txt id="x4z9qp"
Create a modern, professional finance and investment management platform where users can securely invest money into different investment indexes/plans and earn weekly returns based on selected investment duration and admin-defined ROI percentages.

The platform should have a clean, premium, fintech-style UI inspired by modern investment applications like Groww, Zerodha, INDmoney, Binance, and other professional finance dashboards.

---------------------------------------------------
CORE PLATFORM CONCEPT
---------------------------------------------------

Users can:
- Register an account
- Verify their email
- Login using OTP verification
- Complete KYC verification
- Invest in different indexes/plans
- Track investments and weekly returns
- View investment history and wallet details
- Receive notifications and investment updates

Admins can:
- Verify KYC documents
- Approve/reject investments
- Manage users
- Manage investment indexes/plans
- Set weekly return percentages
- Manage withdrawals, notifications, and reports

---------------------------------------------------
AUTHENTICATION FLOW
---------------------------------------------------

The authentication system should include:

1. User Registration
- Full name
- Email
- Password
- Strong password validation

2. Email Verification
- OTP or verification email required
- User cannot login until email is verified

3. Secure Login
- Email + password login
- OTP verification required after password validation
- Session management
- Device/session tracking

4. Forgot Password Flow
- Email verification
- Reset password securely

---------------------------------------------------
KYC VERIFICATION SYSTEM
---------------------------------------------------

Before investing, users must complete KYC verification.

Required documents:
- PAN Card
- Aadhaar Card
- Bank Details
- Selfie verification
- Additional proof documents

Features:
- File upload system
- Document preview
- Status tracking
- Re-upload support
- Verification timeline

KYC statuses:
- Pending
- Under Review
- Verified
- Rejected
- Resubmit Required

Users should clearly see:
- KYC submission progress
- Estimated review time (3 working days)
- Rejection reasons
- Missing documents

Only verified users can invest.

---------------------------------------------------
INVESTMENT SYSTEM
---------------------------------------------------

The platform should display multiple investment indexes/plans on the homepage.

Example indexes:
- Gold Index
- Crypto Index
- AI Index
- Real Estate Index
- Tech Growth Index

Each index should include:
- Name
- ROI percentage
- Risk level
- Lock duration
- Minimum investment
- Weekly return estimate
- Total investors
- Performance charts

---------------------------------------------------
INVESTMENT FLOW
---------------------------------------------------

User investment process:

Step 1:
Select investment index

Step 2:
Choose investment duration
Examples:
- 6 months
- 1 year
- 2 years

Step 3:
Enter investment amount

Step 4:
See estimated weekly return

Step 5:
Complete payment externally
(UPI, bank transfer, crypto, etc.)

Step 6:
Upload payment proof
- Screenshot upload
- Transaction ID input

Step 7:
Investment request submitted

Admin then verifies payment and approves investment.

---------------------------------------------------
INVESTMENT RULES
---------------------------------------------------

- Investment amount becomes locked for selected duration
- Users receive weekly returns
- ROI percentage is controlled by admin
- ROI may vary depending on investment plan
- Investment status tracking required

Statuses:
- Pending Payment
- Payment Verification
- Active
- Completed
- Rejected
- Cancelled

---------------------------------------------------
USER DASHBOARD
---------------------------------------------------

The user dashboard should display:

- Total invested amount
- Active investments
- Weekly profits earned
- Wallet balance
- Investment performance
- ROI analytics
- Transaction history
- KYC status
- Notifications
- Account verification badge

Features:
- Charts and analytics
- Responsive cards
- Clean sidebar navigation
- Real-time updates

---------------------------------------------------
ADMIN DASHBOARD
---------------------------------------------------

Admin panel should include:

User Management:
- View users
- Block/unblock users
- Freeze accounts

KYC Management:
- Review KYC documents
- Approve/reject verification

Investment Management:
- Approve investments
- Manage indexes/plans
- Set ROI percentages

Transaction Management:
- Verify payments
- Manage withdrawals

Analytics:
- Total investments
- Active users
- Revenue charts
- ROI distribution

Notification System:
- Send announcements
- Security alerts
- Investment updates

Audit System:
- Track admin actions
- Maintain security logs

---------------------------------------------------
UI/UX REQUIREMENTS
---------------------------------------------------

Design requirements:
- Modern fintech dashboard UI
- Minimal and premium design
- Mobile responsive
- Dark/light mode
- Professional charts and analytics
- Trust-focused layout
- Smooth animations
- Beginner-friendly experience

Use:
- Clean typography
- Soft shadows
- Rounded cards
- Elegant tables
- Modern forms
- Professional data visualization

---------------------------------------------------
TECHNICAL REQUIREMENTS
---------------------------------------------------

Frontend:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Shadcn UI
- Framer Motion
- TanStack Query
- React Hook Form
- Zod

Backend:
- Better Auth
- MongoDB
- Mongoose
- Redis
- BullMQ

Features:
- Secure authentication
- OTP verification
- Session management
- RBAC
- KYC workflow
- Wallet ledger system
- Notification system
- Audit logs
- Cron jobs for weekly ROI
- Realtime notifications

---------------------------------------------------
IMPORTANT SYSTEM REQUIREMENTS
---------------------------------------------------

- Secure finance-grade authentication
- Clean scalable architecture
- Modular backend structure
- DRY principle
- Reusable components
- Finance-grade security
- Centralized error handling
- API validation
- Role-based permissions
- Device/session tracking
- Rate limiting
- Secure cookies
- Hashed OTP storage

---------------------------------------------------
DESIGN GOAL
---------------------------------------------------

The platform should feel:
- Trustworthy
- Premium
- Professional
- Beginner-friendly
- Secure
- Modern fintech-like
- Clean and scalable
```
