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

ActiveRecord::Schema.define(version: 2020_05_30_020504) do

  create_table "action_text_rich_texts", force: :cascade do |t|
    t.string "name", null: false
    t.text "body"
    t.string "record_type", null: false
    t.integer "record_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["record_type", "record_id", "name"], name: "index_action_text_rich_texts_uniqueness", unique: true
  end

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.integer "record_id", null: false
    t.integer "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "codes", force: :cascade do |t|
    t.text "code"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "quiz_id"
    t.text "notes"
    t.integer "discussion_id"
  end

  create_table "comments", force: :cascade do |t|
    t.integer "team_id"
    t.integer "uni_id"
    t.text "body"
    t.integer "discussion_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["discussion_id"], name: "index_comments_on_discussion_id"
  end

  create_table "correct_answers", force: :cascade do |t|
    t.boolean "isCorrect"
    t.string "variable", null: false
    t.string "role", null: false
    t.integer "code_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "notes"
  end

  create_table "course_users", force: :cascade do |t|
    t.string "course_id"
    t.string "uni_ID", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "academic_program"
    t.integer "team_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "isTeacher"
    t.boolean "isStudent"
  end

  create_table "courses", force: :cascade do |t|
    t.string "course_code", null: false
    t.string "course_name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "discussions", force: :cascade do |t|
    t.text "code"
    t.text "notes"
    t.integer "code_id"
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
    t.index ["code_id"], name: "index_discussions_on_code_id"
  end

  create_table "quizzes", force: :cascade do |t|
    t.integer "course_id"
    t.string "quiz_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.datetime "deadline"
    t.datetime "time_show_answer"
    t.integer "answer_showtime"
    t.boolean "isIndividual"
  end

  create_table "student_answers", force: :cascade do |t|
    t.string "uni_id"
    t.integer "code_id"
    t.string "variable"
    t.string "role"
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
    t.integer "score"
    t.integer "status"
  end

  create_table "student_quizzes", force: :cascade do |t|
    t.integer "quiz_id"
    t.integer "score"
    t.string "uni_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["quiz_id"], name: "index_student_quizzes_on_quiz_id"
  end

  create_table "team_answers", force: :cascade do |t|
    t.integer "team_id"
    t.integer "code_id"
    t.string "variable"
    t.string "role"
    t.integer "score"
    t.integer "status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: ""
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "username"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "var_roles", force: :cascade do |t|
    t.string "VarRole", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "VarRoleDescription"
    t.text "example"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "comments", "discussions"
  add_foreign_key "correct_answers", "codes"
  add_foreign_key "discussions", "codes"
end
