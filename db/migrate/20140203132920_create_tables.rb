class CreateTables < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :name
      t.timestamps
    end

    create_table :games do |t|
      t.integer :winner_id
      t.integer :winner_time
      t.timestamps
    end

    create_table :player_games do |t|
      t.integer :game_id
      t.integer :player_id
      t.timestamps
    end

    add_index :players, :name, :unique=>true
    add_index :player_games, :game_id
    add_index :player_games,[:player_id, :game_id]
  end
end
