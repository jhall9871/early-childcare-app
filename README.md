#Early
##Track enrollment and student progress at an early childhood care facility

Early will be a one-stop shop for Montessori Schools, Day Cares, and other early childhood care facilities to manage enrollment and student progress. Caregivers, teachers, and administrators will all be able to log in and manage data important to the running of the school and the well-being of the children in their care.

##User Stories

Please see the following link for user stories:
https://miro.com/app/board/o9J_knv14rM=/?moveToWidget=3074457349249047993&cot=15

##Wireframes

Please see the following student dashboard:
https://www.canva.com/design/DAEEflxCyiU/share/preview?token=tDgiB8rrBIvHREgjhwSdUA&role=EDITOR&utm_content=DAEEflxCyiU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton

##Models and Properties
FK = Foreign Key

###Child
* id
* first_name
* last_name
* pronouns
* birthdate
* caregiver_id (FK)

###Caregiver
* id
* first_name
* last_name
* pronouns
* salutation
* child_id (FK)

###Teacher
* id
* first_name
* last_name
* pronouns
* salutation

###Admin
* id
* first_name
* last_name
* pronouns
* salutation

###Skill
* id
* category
* abbreviation
* description

##Sample skills

```
const skills = [
  {
    grossmotor: [
      "Roll a Mat and Put it Away",
      "Walk Around the Mat",
      "Carry a Chair",
      "Carry Objects on a Tray",
      "Carry Liquids on a Tray",
      "Walk or Sit on the Line",
      "Walk Next to the Line",
      "Stack a Tower with Blocks",
      "Clap to Music with Your Hands",
      "Tap to Music with Sticks",
      "Dance and Sing without Falling",
      "Outdoor Play – Climb, Swing, Run",
      "Enjoy Daily Walks Outside",
    ],
  },
  {
    kitchenskills: [
      "Open & Close Lids",
      "Pour Water from a Pitcher",
      "Sponge Water Transfer",
      "Wash Vegetables and Fruit",
      "Wash Dishes & the Table",
      "Peel & Cut a Carrot, Banana, Apple",
      "Set a Table, Sort Cutlery, Fold Napkin",
      "Pour/Spoon Beans, Rice, Salt",
      "Whisk, Stir, Sift, Ladle, Bake, Cook",
      "Pack a Lunch or Snack",
      "Learn Knife Skills & Butter Bread",
      "Crack Nuts",
      "Squeeze Orange Juice",
      "Use a Rolling Pin & Cookie Cutters",
    ],
  },
  {
    careofself: [
      "Feeding Self (Fork, Spoon, Cup)",
      "Dressing Frames",
      "Dressing Self",
      "Using Toilet, Wipe, & Flush",
      "Washing Hands, Face, Body",
      "Brushing Teeth",
      "Cleaning & Clipping Nails",
      "Clip Clothespins",
      "Roll a Pair of Socks",
      "Use Clothes Pegs",
      "Hang Up and Put Clothes Away",
      "Wash Clothes",
      "Hang Jacket on Low Hook",
      "Fold a T-Shirt (3.5 y/o)",
      "Folding Work (Towels)",
    ],
  },
  {
    careoftheenvironment: [
      "Use a Dustpan and Small Brush",
      "Sweep with a Child-Sized Broom",
      "Wipe up a Spill and Use a Mop",
      "Vacuum (hand-held)",
      "Dust",
      "Polish – Wood, Metal, Leather",
      "Plant Vegetable Seeds",
      "Clean a House Plant",
      "Clean a Window or Mirror",
      "Flower Arranging",
      "Return Materials to the Shelf",
    ],
  },
  {
    manners: [
      "Daily Greeting & Introduction of Self",
      "Say “Please” and “Thank You”",
      "Table Manners",
      "Answer the Telephone",
      "Blow the Nose",
      "Cover a Cough/Sneeze",
      'Say "Excuse Me"',
      "Learn to Listen (Silent Game)",
      "Wait Your Turn & Stand in Line",
      "Practice Kindness",
      "Gently Care for Animals",
      "Pick Up Trash & Recycle",
      "Respect Living Things (Insects/Plants)",
    ],
  },
  {
    finemotor: [
      "Threading Napkin Holders onto a Scarf",
      "Threading Large Beads on a Straw",
      "Bead Stringing",
      "Sort Buttons by Size/Color",
      "Weave a Ribbon (4y/o)",
      "Lacing & Braiding",
      "Simple Use of Thread and Needle",
      "Sewing Button onto Cloth",
      "Transfer Activities – Fingers, Tweezers, Tongs, Eyedroppers, Magnets",
      "Stack and Sort Coins",
      "Grate Soap(4 y / o)",
    ],
  },
  {
    artandschool: [
      "Wash an Easel",
      "Clean a Vinyl Apron",
      "Sharpen Pencils",
      "Color & Paint",
      "Salt Drawing",
      "Sponge Painting",
      "Rubbings & Stamping",
      "Modeling with Clay",
      "Unwinding and Winding Yarn",
      "Tearing Tissue Paper",
      "Cutting with Scissors",
      "Gluing",
      "Color Mixing",
    ],
  },
  {
    lifeskills: [
      "Insert Batteries into Flashlight",
      "Match Locks & Keys",
      "Threading & Unthreading Nuts on Bolts",
      "Wooden Hammer & Pegs",
      "Feed and Care for an Animal",
      "Dial 9-1-1 Instructions",
      "Learning Home Address & Phone",
      "Number (3 y/o)",
      "Hammering Nails (4 y/o)",
      "Wrap a Present (4 y/o)",
      "Pack an Overnight Bag (4 y/o)",
      "Show & Tell(Public Speaking)",
    ],
  },
];

```

Thanks and looking forward!
-James