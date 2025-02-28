from tkinter import * # Import tkinter
    
class SocialMediaProfileFinder:
    def __init__(self):
        self.window = Tk() # Create a window
        self.window.state('zoomed')
        self.window.title("Social Media Profile Finder") # Set title
        
        for i in range(7):
            self.window.grid_rowconfigure(i, weight=1)

        self.window.grid_columnconfigure(0, weight = 1)
        self.window.grid_columnconfigure(1, weight = 1) 
        self.window.grid_columnconfigure(2, weight = 3)
        self.window.grid_columnconfigure(3, weight = 1)
        self.window.grid_columnconfigure(4, weight = 1)

        Label(self.window, text = "Social Media Profile Finder", 
            font = ("Helvetica", "30", "bold"), foreground = "royalblue1").grid(
            row = 2, column = 1, columnspan = 3, sticky = "nsew", pady = 40)

        Label(self.window, text = "First Name: ", font=("Arial", 16)).grid(row = 3, 
            column = 1, sticky = E)
        Label(self.window, text = "Last Name:", font=("Arial", 16)).grid(row = 4, 
            column = 1, sticky = E)
        
        self.firstName = StringVar()
        Entry(self.window, textvariable = self.firstName, 
            justify = CENTER, font=("Arial", 16), width = 35).grid(row = 3, column = 2, 
            columnspan = 2, padx = 10, pady = 5)
        self.lastName = StringVar()
        Entry(self.window, textvariable = self.lastName, 
            justify = CENTER, font=("Arial", 16), width = 35).grid(row = 4, column = 2,
            columnspan = 2, padx = 10, pady = 5)
        
        btClear = Button(self.window, text = "Clear", 
            command = self.clear, activebackground = "firebrick1", activeforeground = "Light Gray",
            font=("Arial", 14, "bold"), width = 12).grid(row = 5, column = 1, columnspan = 1, sticky = "ew",
            padx = 10, pady = 20)
        
        btFind = Button(self.window, text = "Find", 
            command = self.find, activebackground = "royalblue1", activeforeground = "Light Gray",
            font=("Arial", 14, "bold"), width = 12).grid(row = 5, column = 3, columnspan = 1, sticky = "ew",
            padx = 10, pady = 20)

        self.window.mainloop() # Create an event loop

    def clear(self):
        self.firstName.set("")
        self.lastName.set("")
        
    def find(self):
        return ;

SocialMediaProfileFinder()  # Create GUI 

# git config --user.email "sassykayla22@gmail.com"
# git config --user.name "Kayla-Antilla"