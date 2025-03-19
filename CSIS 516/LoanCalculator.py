from tkinter import * # Import tkinter
    
class LoanCalculator:
    def __init__(self):
        window = Tk() # Create a window
        window.title("Loan Calculator - Kayla Antilla") # Set title
        
        Label(window, text = "Annual Interest Rate (%)").grid(row = 1, 
            column = 1, sticky = E, padx = 5, pady = 2)
        Label(window, text = "Number of Years").grid(row = 2, 
            column = 1, sticky = E, padx = 5, pady = 2)
        Label(window, text = "Loan Amount").grid(row = 3, 
            column = 1, sticky = E, padx = 5, pady = 2)
        Label(window, text = "Monthly Payment:").grid(row = 5, 
            column = 1, sticky = E, padx = 5, pady = 2)
        Label(window, text = "Total Amount Paid:").grid(row = 6, 
            column = 1, sticky = E, padx = 5, pady = 2)
        Label(window,  text = "Total Interest Paid:").grid(row = 7, 
            column = 1, sticky = E, padx = 5, pady = 2)
        
        self.annualInterestRateVar = StringVar()
        Entry(window, textvariable = self.annualInterestRateVar, 
            justify = LEFT).grid(row = 1, column = 2)
        self.numberOfYearsVar = StringVar()
        Entry(window, textvariable = self.numberOfYearsVar, 
            justify = LEFT).grid(row = 2, column = 2)
        self.loanAmountVar = StringVar()
        Entry(window, textvariable = self.loanAmountVar, 
            justify = LEFT).grid(row = 3, column = 2)
        
        btComputePayment = Button(window, text = "Compute Payment", 
            command = self.computePayment).grid(
                row = 4, column = 1, sticky = W, pady = 10, padx = 10)
        btClear = Button(window, text = "Reset/Clear",
            command = self.clearFields).grid(
                row = 4, column = 2, sticky = E, pady = 10, padx = 10)
        
        self.monthlyPaymentVar = StringVar()
        lblMonthlyPayment = Label(window, textvariable = 
            self.monthlyPaymentVar).grid(row = 5, column = 2, 
                sticky = E)
        self.totalPaymentVar = StringVar()
        lblTotalPayment = Label(window, textvariable = 
            self.totalPaymentVar).grid(row = 6, 
                column = 2, sticky = E)
        self.totalInterestPaymentVar = StringVar()
        lblTotalInterestPayment = Label(window, textvariable = 
            self.totalInterestPaymentVar).grid(row = 7, 
                column = 2, sticky = E)
        
        
        window.mainloop() # Create an event loop

    def clearFields(self):
        self.annualInterestRateVar.set("")
        self.numberOfYearsVar.set("")
        self.loanAmountVar.set("")
        self.monthlyPaymentVar.set("")
        self.totalPaymentVar.set("")
        self.totalInterestPaymentVar.set("")

    def computePayment(self):
        monthlyPayment = self.getMonthlyPayment(
            float(self.loanAmountVar.get()), 
            float(self.annualInterestRateVar.get()) / 1200, 
            int(self.numberOfYearsVar.get()))
        self.monthlyPaymentVar.set(f"${monthlyPayment:,.2f}")
        totalPayment = monthlyPayment * 12 * int(self.numberOfYearsVar.get())
        self.totalPaymentVar.set(f"${totalPayment:,.2f}")
        totalInterestPaymentVar = totalPayment - float(self.loanAmountVar.get())
        self.totalInterestPaymentVar.set(f"${totalInterestPaymentVar:,.2f}")
        
    def getMonthlyPayment(self,
            loanAmount, monthlyInterestRate, numberOfYears):
        monthlyPayment = loanAmount * monthlyInterestRate / (1
           - 1 / (1 + monthlyInterestRate) ** (numberOfYears * 12))
        return monthlyPayment;

LoanCalculator()  # Create GUI 