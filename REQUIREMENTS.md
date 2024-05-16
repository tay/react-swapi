1. The landing page should default to the Films Table View.
2. The top level navigation should include, at minimum, the following options: Films, People, and Vehicles.
3. The top level navigation should identify the record type of the current Table View or Details View.
    * E.g. If on a vehicle’s Details View, the Vehicles navigation option should be highlighted.
4. The columns of the Table View should include only the “Most Important” record information.
    * e.g. For Films, the Table View should include at least the Name, Director, and Release Date
    * e.g. For People, the Table View should include at least the Name, Gender, and Films, etc
    * e.g. For Vehicles, the Table View should include at least the Name, Model, Manufacturer, and Films, etc
5. The rows of the Table View should be clickable links to the Details View of the row.
    * The rows of Table View might include links to other objects, such as the Films a particular Vehicle appeared in. These links should navigate to the Details View.
6. The Details View should include all data returned by the API for a particular record.
7. The project may not use an existing SWAPI client wrapper.
8. The project must leverage either Javascript to interact with the SWAPI on the client side, or Hotwire / Stimulus.
9. The SWAPI is terribly slow. The goal of the project is to make a moderately useful site. Consider how you could make your solution more usable, with such a slow backend.
10. Bonus points:
    * Links in the Table View or Details View have text that is more descriptive than the URL
* Images
* CSS
* Mobile-friendly / responsive design