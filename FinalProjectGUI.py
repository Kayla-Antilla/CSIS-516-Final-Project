import sys
import subprocess
from tkinter import * # Import tkinter
from PIL import Image, ImageTk, ImageDraw
# import requests
# from io import BytesIO
    
class SocialMediaProfileFinder:
    def __init__(self, first_name = "", last_name = ""):
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

        image_path = "C:/Users/sassy/Downloads/magnifying glass picture.jpg"
        circular_img = self.make_circle(image_path)
        tk_image = ImageTk.PhotoImage(circular_img)
        
        img_label = Label(self.window, image = tk_image)
        img_label.image = tk_image
        img_label.grid(row = 1, column = 2)

        Label(self.window, text = "Social Media Profile Finder", 
            font = ("Helvetica", "30", "bold"), foreground = "royalblue1").grid(
            row = 2, column = 1, columnspan = 3, sticky = "nsew", pady = 40)

        Label(self.window, text = "First Name:", font=("Arial", 16)).grid(row = 3, 
            column = 1, sticky = E)
        Label(self.window, text = "Last Name:", font=("Arial", 16)).grid(row = 4, 
            column = 1, sticky = E)
        
        self.firstName = StringVar(value = first_name)
        Entry(self.window, textvariable = self.firstName, 
            justify = CENTER, font=("Arial", 16), width = 35).grid(row = 3, column = 2, 
            columnspan = 2, padx = 10, pady = 5)
        self.lastName = StringVar(value = last_name)
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

    def make_circle(self, image_path, size =(100, 100)):
        img = Image.open(image_path).resize(size, Image.LANCZOS)
        mask = Image.new("L", size, 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0, size[0], size[1]), fill = 255)
        circular_img = Image.new("RGBA", size, (0, 0, 0, 0))
        circular_img.paste(img, (0, 0), mask = mask)
        return circular_img

    def clear(self):
        self.firstName.set("")
        self.lastName.set("")
        
    def find(self):
        first_name = self.firstName.get()
        last_name = self.lastName.get()

        script_path = "C:/Users/sassy/OneDrive - Saginaw Valley State University/CIS255/CSIS 516/FinalProject/FinalProjectResultsGUI.py"
        
        try:
            subprocess.run(["python", script_path, first_name, last_name])
            self.window.destroy()
        except subprocess.CalledProcessError as e:
            print(f"Error: {e}")
        # results_window = SocialMediaProfiles(first_name, last_name)
        # results_window.show_reults()
        # open = "C:\Users\sassy\OneDrive - Saginaw Valley State University\CIS255\CSIS 516\FinalProject\FinalProjectResultsGUI.py"

if __name__ == "__main__":
    first_name = sys.argv[1] if len(sys.argv) > 1 else ""
    last_name = sys.argv[2] if len(sys.argv) > 2 else ""

SocialMediaProfileFinder(first_name, last_name)  # Create GUI 