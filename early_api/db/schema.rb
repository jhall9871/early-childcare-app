# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_16_182755) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "abilities", force: :cascade do |t|
    t.bigint "child_id", null: false
    t.bigint "skill_id", null: false
    t.boolean "status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["child_id"], name: "index_abilities_on_child_id"
    t.index ["skill_id"], name: "index_abilities_on_skill_id"
  end

  create_table "admins", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "pronouns"
    t.string "salutation"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "caregivers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "pronouns"
    t.string "salutation"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "children", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "pronouns"
    t.date "birthday"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "photo"
  end

  create_table "classrooms", force: :cascade do |t|
    t.bigint "child_id", null: false
    t.bigint "teacher_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["child_id"], name: "index_classrooms_on_child_id"
    t.index ["teacher_id"], name: "index_classrooms_on_teacher_id"
  end

  create_table "families", force: :cascade do |t|
    t.bigint "caregiver_id", null: false
    t.bigint "child_id", null: false
    t.string "relationship"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["caregiver_id"], name: "index_families_on_caregiver_id"
    t.index ["child_id"], name: "index_families_on_child_id"
  end

  create_table "friendly_id_slugs", force: :cascade do |t|
    t.string "slug", null: false
    t.integer "sluggable_id", null: false
    t.string "sluggable_type", limit: 50
    t.string "scope"
    t.datetime "created_at"
    t.index ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true
    t.index ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type"
    t.index ["sluggable_type", "sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_type_and_sluggable_id"
  end

  create_table "messages", force: :cascade do |t|
    t.bigint "teacher_id", null: false
    t.bigint "caregiver_id", null: false
    t.string "content"
    t.string "author"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["caregiver_id"], name: "index_messages_on_caregiver_id"
    t.index ["teacher_id"], name: "index_messages_on_teacher_id"
  end

  create_table "skills", force: :cascade do |t|
    t.string "category"
    t.string "abbreviation"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "teachers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "pronouns"
    t.string "salutation"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "abilities", "children"
  add_foreign_key "abilities", "skills"
  add_foreign_key "classrooms", "children"
  add_foreign_key "classrooms", "teachers"
  add_foreign_key "families", "caregivers"
  add_foreign_key "families", "children"
  add_foreign_key "messages", "caregivers"
  add_foreign_key "messages", "teachers"
end
