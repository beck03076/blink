class CreateBlinkables < ActiveRecord::Migration[5.1]
  def change
    create_table :blinkables do |t|
      t.string :blink_text
      t.integer :blink_count

      t.timestamps
    end
  end
end
