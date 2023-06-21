create database GameStore
use GameStore



Select * from Users
Select * from Orders
Select * from Reviews
Select * from Games
Select * from Platforms
Select * from Genres





-- Create Users table
CREATE TABLE Users (
  UserName VARCHAR(50) PRIMARY KEY,
  Email VARCHAR(100) NOT NULL,
  Password VARCHAR(255) NOT NULL
);

-- Create Orders table
CREATE TABLE Orders (
  OrderID INT PRIMARY KEY,
  UserName VARCHAR(50) NOT NULL,
  GameID INT NOT NULL,
  OrderDate DATE,
  FOREIGN KEY (UserName) REFERENCES Users(UserName),
  FOREIGN KEY (GameID) REFERENCES Games(GameID)
);


-- Create Reviews table


CREATE TABLE Reviews (
  ReviewID INT PRIMARY KEY,
  GameID INT NOT NULL,
  Comments VARCHAR(500) NOT NULL,
  Ratings INT NOT NULL,
  FOREIGN KEY (GameID) REFERENCES Games(GameID)
);

-- Create Games table
CREATE TABLE Games (
  GameID INT PRIMARY KEY,
  GameName VARCHAR(100) NOT NULL,
  Description VARCHAR(500) NOT NULL,
  GenreID INT NOT NULL,
  PlatformID INT NOT NULL,
  ReleaseDate DATE,
  Price DECIMAL(10, 2),
  FOREIGN KEY (GenreID) REFERENCES Genres(GenreID),
  FOREIGN KEY (PlatformID) REFERENCES Platforms(PlatformID)
);

-- Create Platforms table
CREATE TABLE Platforms (
  PlatformID INT PRIMARY KEY,
  PlatformName VARCHAR(50) NOT NULL
);

-- Create Genres table
CREATE TABLE Genres (
  GenreID INT PRIMARY KEY,
  GenreName VARCHAR(50) NOT NULL
);

INSERT INTO Platforms (PlatformID, PlatformName)
VALUES
  (1, 'PC'),
  (2, 'PlayStation'),
  (3, 'Xbox');

-- Insert into Genre table
INSERT INTO Genres (GenreID, GenreName)
VALUES
  (1, 'Action'),
  (2, 'Adventure'),
  (3, 'Sports'),
  (4, 'Role Playig Games')

  DELETE FROM Orders;


INSERT INTO Orders (OrderID, UserName, GameID, Quantity, OrderDate)
VALUES
  (1, 'john.doe', 1, 2, '2023-05-01'),
  (2, 'jane.smith', 3, 1, '2023-05-02'),
  (3, 'michael.brown', 2, 3, '2023-05-03');

  INSERT INTO Users (UserName, Email, Password)
VALUES
  ('john_doe', 'john.doe@example.com', 'password123'),
  ('jane_smith', 'jane.smith@example.com', 'password456'),
  ('michael_brown', 'michael.brown@example.com', 'password789'),
  ('sarah_jones', 'sarah.jones@example.com', 'passwordabc'),
  ('david_wilson', 'david.wilson@example.com', 'passworddef');

  INSERT INTO Games (GameID, GameName, Description, GenreID, PlatformID, ReleaseDate, Price)
VALUES
  -- Action Games
  (1, 'Call of Duty: Modern Warfare', 'Experience the ultimate online multiplayer warfare.', 1, 1, '2020-10-25', 59.99),
  (2, 'Assassin''s Creed Valhalla', 'Embark on a Viking adventure in a stunning open world.', 1, 2, '2020-11-10', 59.99),
  (3, 'Cyberpunk 2077', 'Enter the futuristic open world of Night City in this action-packed RPG.', 1, 3, '2020-12-10', 59.99),
  
  -- Adventure Games
  (4, 'The Legend of Zelda: Breath ', 'Explore the vast kingdom of Hyrule in this epic adventure.', 2, 1, '2017-03-03', 59.99),
  (5, 'Uncharted 4: A Thiefs End', 'Join Nathan Drake on his final adventure in search of hidden treasures.', 2, 2, '2016-05-10', 39.99),
  (6, 'Red Dead Redemption 2', 'Experience the Old West in this critically acclaimed open-world adventure.', 2, 3, '2018-10-26', 59.99),
  
  -- Sports Games
  (7, 'FIFA 23', 'Play the most authentic football simulation game with realistic gameplay.', 3, 1, '2020-10-09', 59.99),
  (8, 'NBA 2K23', 'Step onto the court and showcase your basketball skills in this immersive sports game.', 3, 2, '2020-09-04', 59.99),
  (9, 'Madden NFL 23', 'Take control of your favorite NFL team and lead them to victory.', 3, 3, '2020-08-28', 59.99),
  
  -- RPG Games
  (10, 'The Witcher 3: Wild Hunt', 'Embark on an epic journey as Geralt of Rivia in this award-winning RPG.', 4, 1, '2015-05-19', 39.99),
  (11, 'Final Fantasy VII Remake', 'Experience the iconic RPG with stunning visuals and revamped gameplay.', 4, 2, '2020-04-10', 59.99),
  (12, 'Elder Scrolls V: Skyrim', 'Immerse yourself in the vast open world of Skyrim as the Dragonborn.', 4, 3, '2011-11-11', 39.99);

  
-- Action Games
INSERT INTO Games (GameID, GameName, Description, GenreID, PlatformID, ReleaseDate, Price)
VALUES
  (13, 'Grand Theft Auto V', 'Experience the criminal underworld in this action-packed open-world game.', 1, 1, '2013-09-17', 59.99),
  (14, 'Marvel''s Spider-Man', 'Swing through the streets of New York City as the iconic superhero Spider-Man.', 1, 2, '2018-09-07', 59.99);

-- Adventure Games
INSERT INTO Games (GameID, GameName, Description, GenreID, PlatformID, ReleaseDate, Price)
VALUES
 (15, 'Horizon Zero Dawn', 'Embark on a post-apocalyptic journey as a skilled hunter in a world ruled by machines.', 2, 1, '2017-02-28', 49.99),
  (16, 'The Last of Us Part II', 'Survive in a brutal post-apocalyptic world filled with infected creatures and hostile factions.', 2, 2, '2020-06-19', 59.99);

-- Sports Games
INSERT INTO Games (GameID, GameName, Description, GenreID, PlatformID, ReleaseDate, Price)
VALUES
  (17, 'NHL 21', 'Take to the ice and compete in the ultimate hockey simulation game.', 3, 1, '2020-10-16', 59.99),
  (18, 'WWE 2K22', 'Step into the ring and experience the drama and action of professional wrestling.', 3, 2, '2022-03-11', 59.99);

-- RPG Games
INSERT INTO Games (GameID, GameName, Description, GenreID, PlatformID, ReleaseDate, Price)
VALUES
  (19, 'Dragon Age: Inquisition', 'Embark on an epic fantasy adventure as the Inquisitor to save the world from chaos.', 4, 1, '2014-11-18', 39.99),
  (20, 'Mass Effect: Legendary Edition', 'Experience the critically acclaimed space RPG trilogy with improved visuals and gameplay.', 4, 2, '2021-05-14', 59.99);


  INSERT INTO Reviews (ReviewID, GameID, Comments, Ratings)
VALUES
  (1, 1, 'Amazing game with intense multiplayer battles!', 4),
  (2, 2, 'Great graphics and immersive gameplay.', 4),
  (3, 3, 'Incredible Viking adventure with stunning visuals.', 4),
  (4, 4, 'Highly recommended for Assassin''s Creed fans!', 4),
  (5, 5, 'Futuristic open world with gripping storyline.', 4),
  (6, 6, 'Needs some improvements in performance.', 3),
  (7, 7, 'Breath-taking open world and engaging quests.', 5),
  (8, 8, 'One of the best Zelda games ever!', 5),
  (9, 9, 'Thrilling action and amazing set-pieces!', 4),
  (10, 10, 'Great storytelling and character development.', 4),
  (11, 11, 'Unforgettable Wild West experience!', 5),
  (12, 12, 'Some technical issues need to be addressed.', 3);
  -- Add 8 additional rows to the Reviews table with real-time comments and ratings
INSERT INTO Reviews (ReviewID, GameID, Comments, Ratings)
VALUES
  (13, 13, 'This game is fantastic! The graphics and gameplay are top-notch.', 5),
  (14, 14, 'The storyline of this game kept me hooked from start to finish.', 4),
  (15, 15, 'The multiplayer mode of this game is incredibly fun and addictive.', 4),
  (16, 16, 'I encountered a few bugs while playing, but overall its a great game.', 3),
  (17, 17, 'The open-world environment of this game is breathtaking.', 5),
  (18, 18, 'The puzzles and challenges in this game are really challenging and rewarding.', 4),
  (19, 19, 'The combat mechanics in this game are smooth and satisfying.', 5),
  (20, 20, 'The character customization options in this game are impressive.', 4);

