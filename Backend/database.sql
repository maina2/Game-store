create database GameStore

use GameStore

CREATE TABLE Platforms (
  PlatformID INT PRIMARY KEY,
  PlatformName VARCHAR(255) NOT NULL
);

CREATE TABLE Genre (
  GenreID INT PRIMARY KEY,
  GenreName VARCHAR(255) NOT NULL
);

CREATE TABLE Games (
  GameID INT PRIMARY KEY,
  GameName VARCHAR(30) NOT NULL,
  ReleaseDate DATE NOT NULL,
  Price DECIMAL(10, 2) NOT NULL,
  GenreID INT NOT NULL,
  PlatformID INT NOT NULL,
  Description VARCHAR(255) NOT NULL,
  FOREIGN KEY (GenreID) REFERENCES Genre(GenreID),
  FOREIGN KEY (PlatformID) REFERENCES Platforms(PlatformID)
);

CREATE TABLE Customers (
  Username INT PRIMARY KEY,
  FirstName VARCHAR(50) NOT NULL,
  LastName VARCHAR(50) NOT NULL,
  Email VARCHAR(100) NOT NULL,
  Password VARCHAR(255) NOT NULL
);


CREATE TABLE Orders (
  OrderID INT PRIMARY KEY,
  CustomerID INT NOT NULL,
  OrderDate DATE NOT NULL,
  TotalAmount DECIMAL(10, 2) NOT NULL,
  GameID INT NOT NULL,
  FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
  FOREIGN KEY (GameID) REFERENCES Games(GameID)
);

CREATE TABLE Reviews (
  ReviewID INT PRIMARY KEY,
  GameID INT NOT NULL,
  Comments VARCHAR(500) NOT NULL,
  Ratings INT NOT NULL,
  FOREIGN KEY (GameID) REFERENCES Games(GameID)
);

SELECT * FROM Platforms
SELECT * FROM Genre
SELECT * FROM Games
SELECT * FROM Customers
SELECT * FROM Orders
SELECT * FROM Reviews

-- Insert into Platforms table
INSERT INTO Platforms (PlatformID, PlatformName)
VALUES
  (1, 'PC'),
  (2, 'PlayStation'),
  (3, 'Xbox');

-- Insert into Genre table
INSERT INTO Genre (GenreID, GenreName)
VALUES
  (1, 'Action'),
  (2, 'Adventure'),
  (3, 'Sports'),
  (4, 'RPG'),
  



-- Insert into Orders table
INSERT INTO Orders (OrderID, CustomerID, OrderDate, TotalAmount, GameID)
VALUES
  (1, 1, '2022-06-01', 59.99, 1),
  (2, 2, '2022-06-02', 49.99, 2),
  (3, 3, '2022-06-03', 39.99, 3);

-- Insert into Reviews table

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


  -- Insert values into the Reviews table
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
