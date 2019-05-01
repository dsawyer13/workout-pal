# Workout Pal Workout Log App
An application that allows users to create and log exercises for each day's workout.

## Live App
https://workoutpal.herokuapp.com/

## Summary
  Beginning at the Landing Page you are given the single option to click a 'GET STARTED' button.  This button redirects the user to the Home Page.  The navigation bar has the text 'Workout Pal' that redirects to the Landing Page from every page.  
    
   After being sent to the Landing Page, the user has a single option of clicking the 'NEW WORKOUT' button.  Once clicked, this button renders a form containing inputs for 'Exercise', 'Weight', 'Sets', and 'Reps'.  Once the inputs are filled the user can click 'Add Exercise' or 'Cancel Workout'.  Add Exercise submits the form and adds the result as a row in a table above the form.  Cancel Workout closes the form entirely and removes any previously added exercises.  Once an exercise is added, it can be edited or deleted with 'edit' and 'delete' buttons adjacent to it.
   
   After the user is finished adding exercise they click 'Finish Workout'.  This adds a 'Previous Workouts' section above that holds a list of previous workouts.  The list entries in 'Previous Workouts' expand on click, and show the table of exercises.  These exercises can be edited and deleted just like the original table. The previous workout entries can be deleted completely by clicking the red 'X' button on the workout item.
  
  ## Built With
  * HTML
  * CSS
  * React
  * Node.JS
  * MongoDB
  
  ## Screenshots
  
  ![Landing Page](https://imgur.com/ozeuoxb.png "Landing Page")
  
  ![Previous Workouts](https://imgur.com/FLCgujN.png "Previous Workouts")
  
  ![New Workout](https://imgur.com/Jb0pFIw.png "New Workout")
