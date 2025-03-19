import sys
import subprocess
from tkinter import *
from PIL import Image, ImageTk, ImageDraw

class SocialMediaProfiles:
    def __init__(self, first_name, last_name):
        self.firstName = first_name
        self.lastName = last_name
        
        self.window = Tk()
        self.window.title("Profile Search Results")
        self.window.state('zoomed')
        # find_window.configure()

        for i in range(7):
            self.window.grid_rowconfigure(i, weight=1)

        for j in range(6):
            self.window.grid_columnconfigure(j, weight = 1)

        Label(self.window, text = "Search results for:", 
            font = ("Helvetica", "20", "bold"), foreground = "royalblue1").grid(row = 0, column = 2, pady = 10, sticky = E)
            
        result_text = f"{self.firstName} {self.lastName}"
        Label(self.window, text=result_text, font = ("Helvetica", "20", "bold")).grid(row = 0, column = 3, pady = 10, sticky = W)
            
        # for i in range(8):
        #     self.window.grid_rowconfigure(i, weight=1)

        # for j in range(5):
        #     self.window.grid_columnconfigure(j, weight = 1)
        # self.window.grid_columnconfigure(1, weight = 1) 
        # self.window.grid_columnconfigure(2, weight = 2)
        # self.window.grid_columnconfigure(3, weight = 3)
        # self.window.grid_columnconfigure(4, weight = 2)

        self.create_platform_row("Snapchat", "C:/Users/sassy/Downloads/snapchat logo picture.jpg", 1)
        self.create_platform_row("Instagram", "C:/Users/sassy/Downloads/instagram logo picture.jpg", 2)
        self.create_platform_row("Facebook", "C:/Users/sassy/Downloads/facebook logo picture.jpg", 3)
        self.create_platform_row("Tik Tok", "C:/Users/sassy/Downloads/tik tok logo picture.jpg", 4)
        self.create_platform_row("X (Twitter)", "C:/Users/sassy/Downloads/twitter logo picture.jpg", 5)

        btBack = Button(self.window, text = "Back", 
            command = self.back, activebackground = "firebrick1", activeforeground = "Light Gray",
            font=("Arial", 14, "bold"), width = 12)
        
        btBack.grid(row = 6, column = 2, columnspan = 2, pady = 20)

        self.window.mainloop()

    def create_platform_row(self, platform_name, image_path, row_num):
        circular_img = self.make_circle(image_path)
        tk_image = ImageTk.PhotoImage(circular_img)
        
        img_label = Label(self.window, image = tk_image)
        img_label.image = tk_image
        img_label.grid(row = row_num, column = 1, sticky = E, padx = 20)

        Label(self.window, text = f"{platform_name}: ", font=("Arial", 16)).grid(row = row_num, 
            column = 2, sticky = W)

    def make_circle(self, image_path, size =(50, 50)):
        img = Image.open(image_path).resize(size, Image.LANCZOS)
        mask = Image.new("L", size, 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0, size[0], size[1]), fill = 255)
        circular_img = Image.new("RGBA", size, (0, 0, 0, 0))
        circular_img.paste(img, (0, 0), mask = mask)
        return circular_img

    def back(self):
        script_path = "C:/Users/sassy/OneDrive - Saginaw Valley State University/CIS255/CSIS 516/FinalProject/FinalProjectGUI.py"
            
        try:
            subprocess.run(["python", script_path, self.firstName, self.lastName])
            self.window.destroy()
        except Exception as e:
            print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python FinalProjectResultsGUI.py <FirstName> <LastName>")
        sys.exit(1)

    first_name = sys.argv[1]
    last_name = sys.argv[2]

    # results_window = SocialMediaProfiles(first_name, last_name)
    # results_window.show_results()

    SocialMediaProfiles(first_name, last_name)