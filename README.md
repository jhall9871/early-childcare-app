# Early
## Track enrollment and student progress at an early childhood care facility

Early is a one-stop shop for Montessori schools, daycares, and other early childhood care facilities to manage enrollment, student progress, and communication. Caregivers, teachers, and administrators are able to log in and manage data important to the running of the school and the well-being of the children in their care.

## Status

Demo MVP with seed data is live at https://panoramic-pergola.surge.sh/

## User Stories

### MVP:

As an administrator, I should be able to:
1. Add and remove students from the database
2. Assign, unassign, and reassign students to classes

As a teacher, I should be able to:
1. View and edit student progress toward various goals
2. Message my students' caregivers

As a caregiver, I should be able to:
1. Vie my child's progress toward various goals
2. Message my child's teachers

### Post-MVP:

As an administrator, I should be able to:
1. Add, update, and remove events from the school calendar
2. Post pictures of students on a virtual bulletin board and tag students
3. Log in with an encrypted password

As a teacher, I should be able to:
1. View the school's calendar
2. View pictures on the bulletin board
3. Log in with an encrypted password


As a caregiver, I should be able to:
1. View the school's calendar
2. View pictures on the bulletin board
3. Log in with an encrypted password

## Models and Join Tables
Please see https://dbdiagram.io/d/5f2afb2008c7880b65c539f0 for join table structure and model properties.

Tables:
- Children
- Skills
- Caregivers
- Teachers

Join Tables:
- Abilities
- Families
- Classrooms
- Messages

## Libraries and Resources
- ChartJS (data visualization)
- DBDiagram.io (database planning)
- Miro.com (wireframes, front-end mapping)

## Sample code


#### Helper function to create student lists sorted by ID, rather than by array order:
```
  const compare = (a, b) => {
    let comparison = 0;
    if (a.id > b.id) {
      comparison = 1;
    } else if (b.id > a.id) {
      comparison = -1;
    }
    return comparison;
  };
```

#### Assign 104 random skill statuses to each of 15 sample students for seed data:
```
1.upto(15) do |i| 
    1.upto(104) do |j|
        random_boolean = [true, false].sample
        Ability.create({child_id: i, skill_id: j, status: random_boolean})
    end
end
```

#### Traverse across 3 join tables to find all caregivers associated with a given teacher:
```
  def caregivers_from_teacher
    @classrooms = Classroom.where(teacher_id: params[:teacher_id])
    @families = @classrooms.map do |classroom|
      Family.where(child_id: classroom.child_id)
    end
    @caregiverids = @families.map do |family|
      family[0].caregiver_id
    end
    @caregivers = @caregiverids.map do |cid|
      Caregiver.where(id: cid)
    end
    @caregivers.flatten!
    render json: @caregivers
  end
```