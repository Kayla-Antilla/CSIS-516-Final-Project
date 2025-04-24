import sys
import subprocess
import webbrowser
from tkinter import * # Import tkinter
# from PIL import Image, ImageTk, ImageDraw # For adding images

# GUI class to display social media profile results
class SocialMediaProfiles:
    def __init__(self, first_name, last_name):
        self.firstName = first_name
        self.lastName = last_name
        
        self.window = Tk() # Create a window
        self.window.title("Profile Search Results") # Set title 
        self.window.state('zoomed')
        # find_window.configure()

        # Create grid rows for spacing
        for i in range(7):
            self.window.grid_rowconfigure(i, weight=1)

        # Create grid columns for spacing 
        for j in range(6):
            self.window.grid_columnconfigure(j, weight = 1)

        # Display label 
        Label(self.window, text = "Search results for:", 
            font = ("Helvetica", "20", "bold"), foreground = "royalblue1").grid(row = 0, column = 2, pady = 10, sticky = E)
            
        # Display the entered name
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

        # Create profile rows for each of the platforms
        self.create_platform_row("Snapchat", "../Images/snapchat logo picture.jpg", 1)
        self.create_platform_row("Instagram", "../Images/instagram logo picture.jpg", 2)
        self.create_platform_row("Facebook", "../Images/facebook logo picture.jpg", 3)
        self.create_platform_row("Tik Tok", "../Images/tik tok logo picture.jpg", 4)
        self.create_platform_row("X (Twitter)", "../Images/twitter logo picture.jpg", 5)

        # Create a back button to return back to the search page 
        btBack = Button(self.window, text = "Back", 
            command = self.back, activebackground = "firebrick1", activeforeground = "Light Gray",
            font=("Arial", 14, "bold"), width = 12)
        
        btBack.grid(row = 6, column = 2, columnspan = 2, pady = 20)

        self.window.mainloop()

    # Create a row in the GUI for a specific platform
    def create_platform_row(self, platform_name, image_path, row_num):
        from PIL import Image, ImageTk, ImageDraw # For adding images
        circular_img = self.make_circle(image_path)
        tk_image = ImageTk.PhotoImage(circular_img)
        
        # Display platform logo
        img_label = Label(self.window, image = tk_image)
        img_label.image = tk_image
        img_label.grid(row = row_num, column = 1, sticky = E, padx = 20)

        # Display platform name
        Label(self.window, text = f"{platform_name}: ", font=("Arial", 16)).grid(row = row_num, 
            column = 2, sticky = W)
        
        # Generate potetial usernames and links for each platform
        username = self.generate_username(platform_name, self.firstName, self.lastName)
        url = self.get_profile_url(platform_name, username)

        # Display a link to each potential platform
        link_label = Label(self.window, text = f"{url}", fg = "black", cursor = "hand2", font = ("Arial", 16, "underline"))
        link_label.grid(row = row_num, column = 3, sticky = W, padx = 10)
        link_label.bind("<Button-1>", lambda e: webbrowser.open_new(url))

    # Generate potential username based on name and each platform
    def generate_username(self, platform, firstName, lastName):
        if platform == "Instagram" or platform == "Snapchat" or platform == "X (Twitter)":
            return f"{firstName}{lastName}".lower()
        elif platform == "Facebook":
            return f"{firstName.lower()}.{lastName.lower()}"
        # elif platform == "X (Twitter)":
        #     return f"{firstName.capitalize()} {lastName.capitalize()}"
        elif platform == "Tik Tok":
            return f"{firstName.lower()}.{lastName.lower()}"
        return f"{firstName}{lastName}".lower()

    # Return the full profile URL based on platform and potential username 
    def get_profile_url(self, platform, username):
        # if platform == "Facebook" or platform == "X (Twitter)":
        #     username = username.replace(" ", "%20")
        
        urls = {
            "Instagram": f"https://www.instagram.com/{username}",
            "Snapchat": f"https://www.snapchat.com/add/{username}",
            "Facebook": f"https://www.facebook.com/{username}",
            "Tik Tok": f"https://www.tiktok.com/@{username}",
            "X (Twitter)": f"https://twitter.com/{username}",
        }

        return urls.get(platform, "#") # Default to "#" if platform not found

    # Function to create circular images from square ones 
    def make_circle(self, image_path, size =(50, 50)):
        from PIL import Image, ImageTk, ImageDraw # For adding images
        img = Image.open(image_path).resize(size, Image.LANCZOS)
        mask = Image.new("L", size, 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0, size[0], size[1]), fill = 255)
        circular_img = Image.new("RGBA", size, (0, 0, 0, 0))
        circular_img.paste(img, (0, 0), mask = mask)
        return circular_img

    #Handle the back button to return to the search screen and retain the current entry
    def back(self):
        # Path to the search screen
        script_path = "FinalProjectGUI.py"
            
        try:
            subprocess.run([sys.executable, script_path, self.firstName, self.lastName])
            self.window.destroy() # Close the current window
        except Exception as e:
            print(f"Error: {e}")

# Entry point when this file is run directly 
if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python FinalProjectResultsGUI.py <FirstName> <LastName>")
        sys.exit(1)

    first_name = sys.argv[1]
    last_name = sys.argv[2]

    # results_window = SocialMediaProfiles(first_name, last_name)
    # results_window.show_results()

    #Launch the results GUI
    SocialMediaProfiles(first_name, last_name)