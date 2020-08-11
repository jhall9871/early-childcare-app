# Early
## Track enrollment and student progress at an early childhood care facility

Early will be a one-stop shop for Montessori Schools, Day Cares, and other early childhood care facilities to manage enrollment and student progress. Caregivers, teachers, and administrators will all be able to log in and manage data important to the running of the school and the well-being of the children in their care.

## User Stories

Please see the following link for user stories:
https://miro.com/app/board/o9J_knv14rM=/?moveToWidget=3074457349249047993&cot=15

## Wireframes

Please see the following student dashboard:
https://www.canva.com/design/DAEEflxCyiU/share/preview?token=tDgiB8rrBIvHREgjhwSdUA&role=EDITOR&utm_content=DAEEflxCyiU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton

## Models and Properties

### Child
* id
* first_name
* last_name
* pronouns
* birthdate

### Caregiver
* id
* first_name
* last_name
* pronouns
* salutation

### Teacher
* id
* first_name
* last_name
* pronouns
* salutation

### Admin
* id
* first_name
* last_name
* pronouns
* salutation

### Skill
* id
* category
* abbreviation
* description

## Join Tables
Please see https://dbdiagram.io/d/5f2afb2008c7880b65c539f0 for join table structure.

## Sample skills

```
Skill.create([
    { category: 'Gross Motor Skills', abbreviation: 'grossmotor', description: "Roll a Mat and Put it Away" },
    { category: 'Gross Motor Skills', abbreviation: 'grossmotor', description: "Walk Around the Mat" },
    { category: 'Gross Motor Skills', abbreviation: 'grossmotor', description: "Carry a Chair" },
    { category: 'Gross Motor Skills', abbreviation: 'grossmotor', description: "Carry Objects on a Tray" },
    { category: 'Gross Motor Skills', abbreviation: 'grossmotor', description: "Carry Liquids on a Tray" },
    { category: 'Gross Motor Skills', abbreviation: 'grossmotor', description: "Walk or Sit on the Line" },
    { category: 'Gross Motor Skills', abbreviation: 'grossmotor', description: "Walk Next to the Line" },
    { category: 'Gross Motor Skills', abbreviation: 'grossmotor', description: "Stack a Tower with Blocks" },
    { category: 'Gross Motor Skills', abbreviation: 'grossmotor', description: "Clap to Music with Your Hands" },
    { category: 'Gross Motor Skills', abbreviation: 'grossmotor', description: "Tap to Music with Sticks" },
    { category: 'Gross Motor Skills', abbreviation: 'grossmotor', description: "Dance and Sing without Falling" },
    { category: 'Gross Motor Skills', abbreviation: 'grossmotor', description: "Outdoor Play – Climb, Swing, Run" },
    { category: 'Gross Motor Skills', abbreviation: 'grossmotor', description: "Enjoy Daily Walks Outside" },
    { category: 'Kitchen Skills', abbreviation: 'kitchen', description: "Open & Close Lids" },
    { category: 'Kitchen Skills', abbreviation: 'kitchen', description: "Pour Water from a Pitcher"},
    { category: 'Kitchen Skills', abbreviation: 'kitchen', description: "Sponge Water Transfer"},
    { category: 'Kitchen Skills', abbreviation: 'kitchen', description: "Wash Vegetables and Fruit"},
    { category: 'Kitchen Skills', abbreviation: 'kitchen', description: "Wash Dishes & the Table"},
    { category: 'Kitchen Skills', abbreviation: 'kitchen', description:  "Peel & Cut a Carrot, Banana, Apple"},
    { category: 'Kitchen Skills', abbreviation: 'kitchen', description: "Set a Table, Sort Cutlery, Fold Napkin"},
    { category: 'Kitchen Skills', abbreviation: 'kitchen', description:  "Pour/Spoon Beans, Rice, Salt"},
    { category: 'Kitchen Skills', abbreviation: 'kitchen', description:  "Whisk, Stir, Sift, Ladle, Bake, Cook"},
    { category: 'Kitchen Skills', abbreviation: 'kitchen', description:  "Pack a Lunch or Snack"},
    { category: 'Kitchen Skills', abbreviation: 'kitchen', description: "Learn Knife Skills & Butter Bread"},
    { category: 'Kitchen Skills', abbreviation: 'kitchen', description:  "Crack Nuts"},
    { category: 'Kitchen Skills', abbreviation: 'kitchen', description:  "Squeeze Orange Juice"},
    { category: 'Kitchen Skills', abbreviation: 'kitchen', description:  "Use a Rolling Pin & Cookie Cutters"},
    { category: 'Care of Self', abbreviation: 'self', description:  "Feeding Self (Fork, Spoon, Cup)"},
    { category: 'Care of Self', abbreviation: 'self', description:   "Dressing Frames"},
    { category: 'Care of Self', abbreviation: 'self', description:   "Dressing Self"},
    { category: 'Care of Self', abbreviation: 'self', description:   "Using Toilet, Wipe, & Flush"},
    { category: 'Care of Self', abbreviation: 'self', description:   "Washing Hands, Face, Body"},
    { category: 'Care of Self', abbreviation: 'self', description:   "Brushing Teeth"},
    { category: 'Care of Self', abbreviation: 'self', description:   "Cleaning & Clipping Nails"},
    { category: 'Care of Self', abbreviation: 'self', description:   "Clip Clothespins"},
    { category: 'Care of Self', abbreviation: 'self', description:   "Roll a Pair of Socks"},
    { category: 'Care of Self', abbreviation: 'self', description:  "Use Clothes Pegs"},
    { category: 'Care of Self', abbreviation: 'self', description:  "Hang Up and Put Clothes Away"},
    { category: 'Care of Self', abbreviation: 'self', description:   "Wash Clothes"},
    { category: 'Care of Self', abbreviation: 'self', description:  "Hang Jacket on Low Hook"},
    { category: 'Care of Self', abbreviation: 'self', description:   "Fold a T-Shirt (3.5 y/o)"},
    { category: 'Care of Self', abbreviation: 'self', description:   "Folding Work (Towels)"},
    { category: 'Care of Environment', abbreviation: 'environment', description:   "Use a Dustpan and Small Brush"},
    { category: 'Care of Environment', abbreviation: 'environment', description:"Use a Dustpan and Small Brush"},
    { category: 'Care of Environment', abbreviation: 'environment', description:"Sweep with a Child-Sized Broom"},
    { category: 'Care of Environment', abbreviation: 'environment', description:"Wipe up a Spill and Use a Mop"},
    { category: 'Care of Environment', abbreviation: 'environment', description:"Vacuum (hand-held)"},
    { category: 'Care of Environment', abbreviation: 'environment', description:"Dust"},
    { category: 'Care of Environment', abbreviation: 'environment', description:"Polish – Wood, Metal, Leather"},
    { category: 'Care of Environment', abbreviation: 'environment', description:"Plant Vegetable Seeds"},
    { category: 'Care of Environment', abbreviation: 'environment', description:"Clean a House Plant"},
    { category: 'Care of Environment', abbreviation: 'environment', description:"Clean a Window or Mirror"},
    { category: 'Care of Environment', abbreviation: 'environment', description:"Flower Arranging"},
    { category: 'Care of Environment', abbreviation: 'environment', description: "Return Materials to the Shelf"},
    { category: 'Manners', abbreviation: 'manners', description: "Daily Greeting & Introduction of Self"},
    { category: 'Manners', abbreviation: 'manners', description: "Say “Please” and “Thank You”"},
    { category: 'Manners', abbreviation: 'manners', description: "Table Manners"},
    { category: 'Manners', abbreviation: 'manners', description: "Answer the Telephone"},
    { category: 'Manners', abbreviation: 'manners', description: "Blow the Nose"},
    { category: 'Manners', abbreviation: 'manners', description: "Cover a Cough/Sneeze"},
    { category: 'Manners', abbreviation: 'manners', description: 'Say "Excuse Me"'},
    { category: 'Manners', abbreviation: 'manners', description: "Learn to Listen (Silent Game)"},
    { category: 'Manners', abbreviation: 'manners', description: "Wait Your Turn & Stand in Line"},
    { category: 'Manners', abbreviation: 'manners', description: "Practice Kindness"},
    { category: 'Manners', abbreviation: 'manners', description: "Gently Care for Animals"},
    { category: 'Manners', abbreviation: 'manners', description: "Pick Up Trash & Recycle"},
    { category: 'Manners', abbreviation: 'manners', description: "Respect Living Things (Insects/Plants)"},
    { category: 'Fine Motor Skills', abbreviation: 'finemotor', description: "Threading Napkin Holders onto a Scarf"},
    { category: 'Fine Motor Skills', abbreviation: 'finemotor', description:"Threading Large Beads on a Straw"},
    { category: 'Fine Motor Skills', abbreviation: 'finemotor', description: "Bead Stringing"},
    { category: 'Fine Motor Skills', abbreviation: 'finemotor', description: "Sort Buttons by Size/Color"},
    { category: 'Fine Motor Skills', abbreviation: 'finemotor', description: "Weave a Ribbon (4y/o)"},
    { category: 'Fine Motor Skills', abbreviation: 'finemotor', description: "Lacing & Braiding"},
    { category: 'Fine Motor Skills', abbreviation: 'finemotor', description: "Simple Use of Thread and Needle"},
    { category: 'Fine Motor Skills', abbreviation: 'finemotor', description: "Sewing Button onto Cloth"},
    { category: 'Fine Motor Skills', abbreviation: 'finemotor', description: "Transfer Activities – Fingers, Tweezers, Tongs, Eyedroppers, Magnets"},
    { category: 'Fine Motor Skills', abbreviation: 'finemotor', description: "Stack and Sort Coins"},
    { category: 'Fine Motor Skills', abbreviation: 'finemotor', description: "Grate Soap(4 y / o)"},
    { category: 'Art and School', abbreviation: 'artandschool', description: "Wash an Easel"},
    { category: 'Art and School', abbreviation: 'artandschool', description:  "Clean a Vinyl Apron"},
    { category: 'Art and School', abbreviation: 'artandschool', description: "Sharpen Pencils"},
    { category: 'Art and School', abbreviation: 'artandschool', description: "Color & Paint"},
    { category: 'Art and School', abbreviation: 'artandschool', description: "Salt Drawing"},
    { category: 'Art and School', abbreviation: 'artandschool', description: "Sponge Painting"},
    { category: 'Art and School', abbreviation: 'artandschool', description: "Rubbings & Stamping"},
    { category: 'Art and School', abbreviation: 'artandschool', description: "Modeling with Clay"},
    { category: 'Art and School', abbreviation: 'artandschool', description: "Unwinding and Winding Yarn"},
    { category: 'Art and School', abbreviation: 'artandschool', description: "Tearing Tissue Paper"},
    { category: 'Art and School', abbreviation: 'artandschool', description: "Cutting with Scissors"},
    { category: 'Art and School', abbreviation: 'artandschool', description:"Gluing"},
    { category: 'Art and School', abbreviation: 'artandschool', description:"Color Mixing"},
    { category: 'Life Skills', abbreviation: 'life', description: "Insert Batteries into Flashlight"},
    { category: 'Life Skills', abbreviation: 'life', description: "Insert Batteries into Flashlight"},
    { category: 'Life Skills', abbreviation: 'life', description:  "Match Locks & Keys"},
    { category: 'Life Skills', abbreviation: 'life', description:  "Threading & Unthreading Nuts on Bolts"},
    { category: 'Life Skills', abbreviation: 'life', description:  "Wooden Hammer & Pegs"},
    { category: 'Life Skills', abbreviation: 'life', description:  "Feed and Care for an Animal"},
    { category: 'Life Skills', abbreviation: 'life', description: "Dial 9-1-1 Instructions"},
    { category: 'Life Skills', abbreviation: 'life', description:  "Learning Home Address & Phone"},
    { category: 'Life Skills', abbreviation: 'life', description: "Number (3 y/o)"},
    { category: 'Life Skills', abbreviation: 'life', description: "Hammering Nails (4 y/o)"},
    { category: 'Life Skills', abbreviation: 'life', description: "Wrap a Present (4 y/o)"},
    { category: 'Life Skills', abbreviation: 'life', description: "Pack an Overnight Bag (4 y/o)"},
    { category: 'Life Skills', abbreviation: 'life', description: "Show & Tell(Public Speaking)"}
])
```

Thanks and looking forward!
-James