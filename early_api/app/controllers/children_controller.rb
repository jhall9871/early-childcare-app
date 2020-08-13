class ChildrenController < ApplicationController
  before_action :set_child, only: [:show, :update, :destroy]

  # GET /children
  def index
    @children = Child.all

    render json: @children.to_json(include: [:teachers, :caregivers])
  end

  # GET /children/1
  def show
    render json: @child.to_json(include: [:teachers, :caregivers, :abilities, :skills])
  end

  # POST /children
  def create
    @child = Child.new(child_params)

    if @child.save
      render json: @child, status: :created, location: @child
    else
      render json: @child.errors, status: :unprocessable_entity
    end
  
    #also create an abilities join table, all false
    newId = @child.id

    1.upto(104) do |j|
      random_boolean = [true, false].sample
      Ability.create({child_id: newId, skill_id: j, status: false})
    end

  end

  # PATCH/PUT /children/1
  def update
    if @child.update(child_params)
      render json: @child
    else
      render json: @child.errors, status: :unprocessable_entity
    end
  end

  # DELETE /children/1
  # This has been modified to find associated abilities and delete them first
  def destroy
    Ability.where(child_id: params[:id]).destroy_all
    Classroom.where(child_id: params[:id]).destroy_all
    Family.where(child_id: params[:id]).destroy_all
    @child.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_child
      @child = Child.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def child_params
      params.require(:child).permit(:first_name, :last_name, :pronouns, :birthday)
    end
end
