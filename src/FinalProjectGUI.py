import sys
import subprocess
from tkinter import * # Import tkinter
from PIL import Image, ImageTk, ImageDraw # For adding images

# import requests
# from io import BytesIO
    
# Class for the firt GUI screen where users enter a first and last name 
class SocialMediaProfileFinder:
    def __init__(self, first_name = "", last_name = ""):
        self.window = Tk() # Create a window
        self.window.state('zoomed')
        self.window.title("Social Media Profile Finder") # Set title
        
        # Create grid rows for spacing
        for i in range(7):
            self.window.grid_rowconfigure(i, weight=1)

        # Configure grid columns with different weights for layout purposes
        self.window.grid_columnconfigure(0, weight = 1)
        self.window.grid_columnconfigure(1, weight = 1) 
        self.window.grid_columnconfigure(2, weight = 3)
        self.window.grid_columnconfigure(3, weight = 1)
        self.window.grid_columnconfigure(4, weight = 1)


        # Load and display a cicrular image of a magnifying glass as the page logo
        image_path = "C:/Users/sassy/Downloads/magnifying glass picture.jpg"
        circular_img = self.make_circle(image_path)
        tk_image = ImageTk.PhotoImage(circular_img)
        
        img_label = Label(self.window, image = tk_image)
        img_label.image = tk_image
        img_label.grid(row = 1, column = 2)


        # App title
        Label(self.window, text = "Social Media Profile Finder", 
            font = ("Helvetica", "30", "bold"), foreground = "royalblue1").grid(
            row = 2, column = 1, columnspan = 3, sticky = "nsew", pady = 40)


        # Create input fields for first and last name 
        Label(self.window, text = "First Name:", font=("Arial", 16)).grid(row = 3, 
            column = 1, sticky = E)
        Label(self.window, text = "Last Name:", font=("Arial", 16)).grid(row = 4, 
            column = 1, sticky = E)
        

        # First name entry
        self.firstName = StringVar(value = first_name)
        Entry(self.window, textvariable = self.firstName, 
            justify = CENTER, font=("Arial", 16), width = 35).grid(row = 3, column = 2, 
            columnspan = 2, padx = 10, pady = 5)
        
        # Last name entry
        self.lastName = StringVar(value = last_name)
        Entry(self.window, textvariable = self.lastName, 
            justify = CENTER, font=("Arial", 16), width = 35).grid(row = 4, column = 2,
            columnspan = 2, padx = 10, pady = 5)
        
        # Create a clear button (calls clear)
        btClear = Button(self.window, text = "Clear", 
            command = self.clear, activebackground = "firebrick1", activeforeground = "Light Gray",
            font=("Arial", 14, "bold"), width = 12).grid(row = 5, column = 1, columnspan = 1, sticky = "ew",
            padx = 10, pady = 20)
        
        # Create a find button (closes the window and opens the results window)
        btFind = Button(self.window, text = "Find", 
            command = self.find, activebackground = "royalblue1", activeforeground = "Light Gray",
            font=("Arial", 14, "bold"), width = 12).grid(row = 5, column = 3, columnspan = 1, sticky = "ew",
            padx = 10, pady = 20)

        self.window.mainloop() # Create an event loop


    # Convert a square image to a circular image
    def make_circle(self, image_path, size =(100, 100)):
        img = Image.open(image_path).resize(size, Image.LANCZOS)
        mask = Image.new("L", size, 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0, size[0], size[1]), fill = 255)
        circular_img = Image.new("RGBA", size, (0, 0, 0, 0))
        circular_img.paste(img, (0, 0), mask = mask)
        return circular_img


    # Clears both the first and last name entries
    def clear(self):
        self.firstName.set("")
        self.lastName.set("")
        
    # Opens the new window to display the results 
    def find(self):
        first_name = self.firstName.get()
        last_name = self.lastName.get()


        # Link to the path that will show the results
        script_path = "C:/Users/sassy/OneDrive - Saginaw Valley State University/CIS255/CSIS 516/FinalProject/FinalProjectResultsGUI.py"
        
        try:
            subprocess.run(["python", script_path, first_name, last_name])
            self.window.destroy() # Close the current window
        except subprocess.CalledProcessError as e:
            print(f"Error: {e}")
        # results_window = SocialMediaProfiles(first_name, last_name)
        # results_window.show_reults()
        # open = "C:\Users\sassy\OneDrive - Saginaw Valley State University\CIS255\CSIS 516\FinalProject\FinalProjectResultsGUI.py"

if __name__ == "__main__":
    first_name = sys.argv[1] if len(sys.argv) > 1 else ""
    last_name = sys.argv[2] if len(sys.argv) > 2 else ""

SocialMediaProfileFinder(first_name, last_name)  # Create GUI 
