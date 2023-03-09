# Team Profile Generator

## Description

A command-line application that accepts user input to generate a nicely formatted team roster in an HTML file.

## Acceptance Criteria

```
When the user runs the application, they are prompted to enter the team manager’s name, employee ID, email address, and office number.

After entering the team manager's information, the user is presented with a menu with the option to add an engineer, add an intern, or to finish building the team.

If the user chooses to add an engineer, they are prompted to enter the engineer’s name, ID, email, and GitHub username. After entering the information, the user is taken back to the main menu.

If the user chooses to add an intern, they are prompted to enter the intern’s name, ID, email, and school. After entering the information, the user is taken back to the main menu.

Once the user has finished building their team, they exit the application and an HTML file is generated that displays a nicely formatted team roster based on user input.

When the user clicks on an email address in the generated HTML, their default email program opens and populates the TO field of the email with the address.

When the user clicks on a GitHub username in the generated HTML, the corresponding GitHub profile opens in a new tab.
```

## Installation

npm i inquirer@8.2.4

## Usage

Enter node index.js in the integrated terminal and answer the following prompted questions.
