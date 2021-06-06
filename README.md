# CS374-design-project

This project is done from class CS374, Introduction to Human-Computer Interaction.

## Contribution Status

### Contributor

[Jaewoong Ahn](https://github.com/busankimchi)

[Woomin Song](https://github.com/totolacky)

[Gyusung Jo](https://github.com/gyusss)

[Chaeyoon Jeong](https://github.com/chaeyoonjeong)

### Detailed Contributions

Check the following spreadsheet to check our contributions according to the tasks divided by components / functionallity / back-end settings.

[WBS (Work Breakdown Strcuture)](https://docs.google.com/spreadsheets/d/1zMIxAb7RoWQG_NQ1JPm9jan3aDGA5EjUEq8qmSvUdl4/edit#gid=0)

## CAUTION!!!!!
_**This project has two unanswered questions. Keep in mind that once you answer them, there's no way to remove your answer.**_


## Project Details

### Key features
1. _**Topic/Subtopic structure!!!**_
  * Topics are fully managed by the TAs, and subtopics can be freely added by the students.
  * Topics and subtopics are at the left most drawer.
  * When a subtopic is clicked, the corresponding question list appears.
  * Topic name can be edited by right clicking it.
 
2. _**Double-sided view!!!**_
  * There's a button in every element in the question list, which can open a question in a double-sided view.
  * When the user hovers over the button or the question list element, a shadow appears, indicating where the question will open.
  * When no question is opened, the button is disabled. Therefore, questions can be opened in a single view.
  * When the double-sided view button is clicked, the new question always appears on the right half. If a question already exists there, it is replaced.
  * All views can be closed by clicking the 'X' button.

3. _**One-touch FAQ board!!!**_
  * Every question has a toggle button with a pin icon.
  * The user can easily add or remove a question to the FAQ board by toggling the "pin".

---

### Tasks

You are a TA in CS330 (OS) class. A new assignment (Project 3) is coming up, and you are expecting a lot of questions. You want to make a question zone to manage Q&A for Project. 

_**[Task 1] Add a new topic “Project 3” so that students can leave questions or discussions there.**_

Now, a student left a new question.

_**[Task 2] Find the newest unanswered question.**_

This question has a similar question that was already answered before. 

_**[Task 3] Let’s find the related questions, and answer this question.**_

This question has already been asked twice, and you don’t want to see any similar questions anymore. 

_**[Task 4] Add this question to the FAQ so that more students can notice it.**_

_**[Task 5] After doing so, check if the question is properly added to the FAQ.**_

---


### Usability Details : What we implemented
* Question list is hidable for readability.
* Unanswered question have red/italic title.
* Search bar / search history is implemented.
* All questions are ordered by time.

### Usability Details : What we did NOT implement
* Questions cannot be added by the TAs.
  * (We didn't implement this since it's the student's role to ask questions.)
* Answers are not editable after submitting.
  * (We didn't implement this since it's not crucial for performing our tasks.)
* Subtopics cannot be added by the TAs, therefore manipulating subtopics is not implemented in this project.


## Working Process

### Dev Notes (Korean)
[Dev Notes](https://github.com/busankimchi/CS374-design-project/blob/master/dev-notes/DEV.md)

### Git flow

1. Hosting is done when a push occurs 'master' branch and a PR occurs in any branch.
2. All development is done based on 'develop' branch. When a milestone is accomplished, merge to 'master' branch.
3. Checkout the branch from 'develop' branch to implement certain part of the project. Name the branch name by 'feature/\*'

