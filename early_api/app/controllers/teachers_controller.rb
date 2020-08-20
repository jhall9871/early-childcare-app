class TeachersController < ApplicationController
  before_action :set_teacher, only: [:show, :update, :destroy]

  # Find all teachers associated with a caregiver's children
  def teachers_from_caregiver
    @families = Family.where(caregiver_id: params[:caregiver_id])
    @children = @families.map do |family|
      Child.where(id: family.child_id)
    end
    @children.flatten!
    @classrooms = @children.map do |child|
      Classroom.where(child_id: child.id)
    end
    @classrooms.flatten!
    @teachers = @classrooms.map do |classroom|
      Teacher.where(id: classroom.teacher_id)
    end
    @teachers.flatten!
    render json: @teachers
  end

  # GET /teachers
  def index
    @teachers = Teacher.all

    render json: @teachers.to_json(include: :children)
  end

  # GET /teachers/1
  def show
    render json: @teacher.to_json(include: [:children, :messages])
  end

  # POST /teachers
  def create
    @teacher = Teacher.new(teacher_params)

    if @teacher.save
      render json: @teacher, status: :created, location: @teacher
    else
      render json: @teacher.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /teachers/1
  def update
    if @teacher.update(teacher_params)
      render json: @teacher
    else
      render json: @teacher.errors, status: :unprocessable_entity
    end
  end

  # DELETE /teachers/1
  def destroy
    @teacher.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_teacher
      @teacher = Teacher.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def teacher_params
      params.require(:teacher).permit(:first_name, :last_name, :pronouns, :salutation)
    end
end
