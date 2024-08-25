# Minecraft Server Website

This repository contains the code for a website dedicated to a Minecraft server. It includes a homepage and a staff members' page. This README.md will guide you on how you can edit and set it up.
Project Structure

The structure of the project includes:

The index.html file: This is the main page of the website.
The staff.html file: This file is the one that displays the staff members.
css/style.css: The style CSS file.
js/script.js: The JavaScript file for the site logic
config.json: Configuration file. Customize staff members and theme colors here

Configuration and Customization
1. Edit Configuration File

`config.json` - Hub in a project's root directory. Used to define staff members and customize the `themeColor`.

Here's what a `config.json` might look like:

```json
{
"themeColor": "#3498db",
"staff": {
"Owner": [
{ "nick": "NickOwner1", "skin": "https://example.com/skin1.png" }
],
"Developer": [
{ "nick": "NickDev1", "skin": "https://example.com/skin2.png" }
],
"Admin": [
{ "Nick": "admin1", "Skin": "https://example.com/skin2.png" },
{ "Nick": "admin2", "Skin": "https://example.com/skin3.png" }
]
}
}
````

Config Parameters

themeColor: Site theme color. Defines primary color used on buttons, borders, and headings.

staff: Defines staff members.
Owner and Admin: Sections for different ranks. You can add more ranks as needed.
nick: Staff member's name.
skin: URL dell'immagine della skin del membro dello staff.

2. Modifying the Home Page (index.html)

The home page (index.html) contains the logo, server title, and buttons. You may further customize the text and links of the buttons as follows:


Potential Changes :

Logo: Change the src attribute of the logo image to point to your logo.
Pulsanti: Modifica il link all'interno dei tag <a> per cambiare le destinazioni dei pulsanti.

3. Modificare la Pagina Staff (staff.html)

La pagina dello staff visualizza i membri dello staff secondo le informazioni nel file config.json. Ecco come puoi strutturare questa pagina:

------------------------

4. Edit the Style (style.css)

The CSS file takes care of the formatting of the site. You can customize the colors and layout by editing the following sections:

Theme Color: Edit the --theme-color variable to change the theme color.
Button Styles and Titles: Adjust CSS properties to adapt the design to your preferences.


5. JavaScript (script.js)

The JavaScript file (script.js) contains the logic to dynamically feed in staff members and other staff interaction. Make sure the code aligns to a structure similar to config.json for generating the staff members as required.


Final Notes

Updates: Whenever you make any changes in the config.json file, refresh the page to see the changes.
Testing: Test the website on various devices and resolutions to ensure that the layout remains responsive and functional.

By now, with these instructions, you should be able to customize and maintain your Minecraft Server website easily. Have a good working day!
