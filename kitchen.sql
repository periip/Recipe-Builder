drop table PartOf;
drop table Combo;
drop table AddonCanHave;
drop table AddOnPrice;
drop table Beverages;
drop table Food;
drop table Makes;
drop table Uses;
drop table Equipment;
drop table Recommends;
drop table MenuItemDetails;
drop table MenuItemPrice;
drop table Has;
drop table RecipeOwns;
drop table ChefExperience;
drop table ChefStatus;
drop table Supplies;
drop table Supplier;
drop table Ingredient;

CREATE TABLE Ingredient (
	ingredient_name VARCHAR(255),
	price FLOAT,
	PRIMARY KEY(ingredient_name)
);

grant select on Ingredient to public;

CREATE TABLE Supplier (
	supplier_name VARCHAR(255),
	PRIMARY KEY(supplier_name)
);

grant select on Supplier to public;

CREATE TABLE Supplies (
	supplier_name VARCHAR(255),
	ingredient_name VARCHAR(255),
	since DATE,
	PRIMARY KEY(supplier_name, ingredient_name),
	FOREIGN KEY(supplier_name) REFERENCES Supplier,
	FOREIGN KEY(ingredient_name) REFERENCES Ingredient
);
grant select on Supplies to public;

CREATE TABLE ChefStatus (
	seniority VARCHAR(255),
	years_of_experience INTEGER,
	PRIMARY KEY(years_of_experience)
);
grant select on ChefStatus to public;

CREATE TABLE ChefExperience (
	chef_name VARCHAR(255),
	years_of_experience INTEGER,
	cooking_license VARCHAR(255) NOT NULL,
	PRIMARY KEY(chef_name),
	FOREIGN KEY(years_of_experience) REFERENCES ChefStatus
);
grant select on ChefExperience to public;

CREATE TABLE RecipeOwns (
	recipe_ID INTEGER,
	chef_name VARCHAR(255) NOT NULL,
	recipe_name VARCHAR(255) NOT NULL,
	PRIMARY KEY(recipe_ID),
	FOREIGN KEY(chef_name) REFERENCES ChefExperience
		ON DELETE SET NULL
);
grant select on RecipeOwns to public;

CREATE TABLE Has (
	recipe_ID INTEGER,
    ingredient_name VARCHAR(255),
    quantity FLOAT,
    unit VARCHAR(255),
	PRIMARY KEY(recipe_ID, ingredient_name),
	FOREIGN KEY(recipe_ID) REFERENCES RecipeOwns
	    ON DELETE CASCADE,
	FOREIGN KEY(ingredient_name) REFERENCES Ingredient
);
grant select on Has to public;

CREATE TABLE MenuItemPrice (
	price FLOAT NOT NULL,
	isGourmet NUMBER(1) NOT NULL,
	PRIMARY KEY(price)
);
grant select on MenuItemPrice to public;

CREATE TABLE MenuItemDetails (
	menu_item_name VARCHAR(255),
	cuisine VARCHAR(255) NULL,
	price FLOAT NOT NULL,
	dietary_restrictions VARCHAR(255) NULL,
    license_requirement VARCHAR(255) NOT NULL,
	PRIMARY KEY(menu_item_name),
    FOREIGN KEY(price) REFERENCES MenuItemPrice 
);
grant select on MenuItemDetails to public;

CREATE TABLE Recommends (
	chef_name VARCHAR(255),
	menu_item_name VARCHAR(255),
	PRIMARY KEY(chef_name, menu_item_name),
	FOREIGN KEY(chef_name) REFERENCES ChefExperience
		ON DELETE CASCADE,
	FOREIGN KEY(menu_item_name) REFERENCES MenuItemDetails
		ON DELETE CASCADE
);
grant select on Recommends to public;

CREATE TABLE Equipment (
	equpiment_name VARCHAR(255),
	equipment_material VARCHAR(255),
	PRIMARY KEY(equpiment_name, equipment_material)
);
grant select on Equipment to public;

CREATE TABLE Uses (
	equipment_name VARCHAR(255),
	equipment_material VARCHAR(255),
	recipe_ID INTEGER,
	PRIMARY KEY(equipment_name, equipment_material, recipe_ID),
	FOREIGN KEY(equipment_name, equipment_material) REFERENCES Equipment,
	FOREIGN KEY(recipe_ID) REFERENCES RecipeOwns
		ON DELETE CASCADE
);
grant select on Uses to public;

CREATE TABLE Makes (
	recipe_ID INTEGER,
	chef_name VARCHAR(255),
	menu_item_name VARCHAR(255),
	PRIMARY KEY(recipe_ID, chef_name, menu_item_name),
	FOREIGN KEY(chef_name) REFERENCES ChefExperience
		ON DELETE CASCADE,
	FOREIGN KEY(menu_item_name) REFERENCES MenuItemDetails
		ON DELETE CASCADE
);
grant select on Makes to public;

CREATE TABLE Food (
	menu_item_name VARCHAR(255),
	course VARCHAR(255),
	PRIMARY KEY(menu_item_name),
	FOREIGN KEY(menu_item_name) REFERENCES MenuItemDetails
		ON DELETE CASCADE
);
grant select on Food to public;

CREATE TABLE Beverages (
	menu_item_name VARCHAR(255),
	hasAlcohol NUMBER(1) NOT NULL,
	PRIMARY KEY(menu_item_name),
	FOREIGN KEY(menu_item_name) REFERENCES MenuItemDetails
		ON DELETE CASCADE
);
grant select on Beverages to public;

CREATE TABLE AddOnPrice (
    addon_name VARCHAR(255),
    price FLOAT,
	PRIMARY KEY(addon_name)
);
grant select on AddOnPrice to public;

CREATE TABLE AddonCanHave (
    menu_item_name VARCHAR(255),
    addon_name VARCHAR(255),
	PRIMARY KEY(menu_item_name, addon_name),
	FOREIGN KEY(menu_item_name) REFERENCES MenuItemDetails
		ON DELETE CASCADE,
	FOREIGN KEY(addon_name) REFERENCES AddOnPrice
);
grant select on AddonCanHave to public;

CREATE TABLE Combo (
	combo_name VARCHAR(255),
	price FLOAT NOT NULL,
	PRIMARY KEY(combo_name)
);
grant select on Combo to public;

CREATE TABLE PartOf (
	combo_name VARCHAR(255),
	menu_item_name VARCHAR(255),
	PRIMARY KEY(combo_name, menu_item_name),
	FOREIGN KEY(combo_name) REFERENCES Combo
		ON DELETE CASCADE,
	FOREIGN KEY(menu_item_name) REFERENCES MenuItemDetails
);
grant select on PartOf to public;


--Ingredient
--select 'Ingredient' AS '';

INSERT
INTO Ingredient
VALUES ('Garlic', 1.00);

INSERT
INTO Ingredient
VALUES ('Turkey',  35.00);

INSERT
INTO Ingredient
VALUES ('Caviar', 500.00);

INSERT
INTO Ingredient
VALUES ('Onion', 0.50);

INSERT
INTO Ingredient
VALUES ('Potato', 0.67);

INSERT
INTO Ingredient
VALUES ('Apple', 0.45);

INSERT
INTO Ingredient
VALUES ('Blueberries', 6.99);

INSERT
INTO Ingredient
VALUES ('Gluten Free Mushroom', 2.35);

INSERT
INTO Ingredient
VALUES ('Dough', 2.87);

--Supplier
--select 'Supplier' AS '';

INSERT
INTO Supplier
VALUES ('Joels Orchard');

INSERT
INTO Supplier
VALUES ('Jennys Farm');

INSERT
INTO Supplier
VALUES ('Nicks Butcher Shop');

INSERT
INTO Supplier
VALUES ('Happy Farm');

INSERT
INTO Supplier
VALUES('Queen Anicas Palace');

--Supplies
--select 'Supplies' AS '';

INSERT
INTO Supplies
VALUES ('Joels Orchard', 'Apple', '01-MAR-2021');

INSERT
INTO Supplies
VALUES ('Nicks Butcher Shop', 'Turkey', '15-FEB-2019');

INSERT
INTO Supplies
VALUES ('Jennys Farm', 'Potato', '20-MAY-2024');

INSERT
INTO Supplies
VALUES ('Jennys Farm', 'Onion', '20-MAY-2024');

INSERT
INTO Supplies
VALUES ('Joels Orchard', 'Blueberries', '01-MAR-2021');

INSERT
INTO Supplies
VALUES('Queen Anicas Palace', 'Caviar', '19-FEB-2004');

--ChefStatus
--select 'ChefStatus' AS '';

INSERT
INTO ChefStatus
VALUES ('master', 10);

INSERT
INTO ChefStatus
VALUES ('apprentice', 1);

INSERT
INTO ChefStatus
VALUES ('master', 20);

INSERT
INTO ChefStatus
VALUES ('novice', 2);

INSERT
INTO ChefStatus
VALUES ('beginner', 0);

--ChefExperience
--select 'ChefExperience' AS '';

INSERT
INTO ChefExperience
VALUES ('Ryan', 10, 'Nut');

INSERT
INTO ChefExperience
VALUES ('Perry', 1, 'Common');

INSERT
INTO ChefExperience
VALUES ('Gordon', 20, 'Halal');

INSERT
INTO ChefExperience
VALUES ('William', 2, 'Gluten');

INSERT
INTO ChefExperience
VALUES ('Louis', 0, 'Diary');

--RecipeOwns
--select 'RecipeOwns' AS '';

INSERT
INTO RecipeOwns
VALUES (1, 'Perry', 'Garlic Beef');

INSERT
INTO RecipeOwns
VALUES (2, 'Louis', 'BigWay Hot Pot');

INSERT
INTO RecipeOwns
VALUES (3, 'Ryan', 'Roast Turkey');

INSERT
INTO RecipeOwns
VALUES (4, 'Gordon', 'Beef Wellington');

INSERT
INTO RecipeOwns
VALUES (5, 'William', 'Gluten Free Mushroom Pizza');

INSERT
INTO RecipeOwns
VALUES (6, 'Louis', 'Apple Pie');

--Has
--select 'Has' AS '';

INSERT
INTO Has
VALUES (6, 'Apple', 3, 'Ib');

INSERT
INTO Has
VALUES (3, 'Turkey', 1, 'item');

INSERT
INTO Has
VALUES (5, 'Gluten Free Mushroom', 1, 'Ib');

INSERT
INTO Has
VALUES (5, 'Dough', 3, 'Ib');

INSERT
INTO Has
VALUES (1, 'Garlic', 8, 'item');

--MenuItemPrice
--select 'MenuItemPrice' AS '';

INSERT
INTO MenuItemPrice
VALUES (10.00, 0);

INSERT
INTO MenuItemPrice
VALUES (25.00, 0);

INSERT
INTO MenuItemPrice
VALUES (45.00, 0);

INSERT
INTO MenuItemPrice
VALUES (155.67, 1);

INSERT
INTO MenuItemPrice
VALUES (20.00, 1);

INSERT
INTO MenuItemPrice
VALUES (6.50, 0);

INSERT
INTO MenuItemPrice
VALUES (7.00, 0);

INSERT
INTO MenuItemPrice
VALUES (18.00, 1);

INSERT
INTO MenuItemPrice
VALUES (3.25, 0);

INSERT
INTO MenuItemPrice
VALUES (1.50, 0);

--MenuItemDetails
--select 'MenuItemDetails' AS '';

INSERT
INTO MenuItemDetails
VALUES ('Garlic Beef', 'Chinese', 10.00, NULL, 'Common');

INSERT
INTO MenuItemDetails
VALUES ('BigWay Hot Pot', 'Chinese', 25.00, 'Contains Nuts', 'Nut');

INSERT
INTO MenuItemDetails
VALUES ('Roast Turkey', 'American', 45.00, 'Halal', 'Halal');

INSERT
INTO MenuItemDetails
VALUES ('Beef Wellington', 'American', 155.67, NULL, 'Common');

INSERT
INTO MenuItemDetails
VALUES ('Gluten Free Mushroom Pizza', 'Italian', 20.00, 'Gluten Free', 'Gluten');

INSERT
INTO MenuItemDetails
VALUES ('Beer', NULL, 6.50, NULL, 'Common');

INSERT
INTO MenuItemDetails
VALUES ('Milk Tea', 'Taiwanese', 7.00, 'Contains Milk', 'Diary');

INSERT
INTO MenuItemDetails
VALUES ('Candied Bacon Bourbon', NULL, 18.00, NULL, 'Common');

INSERT
INTO MenuItemDetails
VALUES ('Lemonade', NULL, 3.25, NULL, 'Common');

INSERT
INTO MenuItemDetails
VALUES ('Root Beer', NULL, 1.50, NULL, 'Common');

--Makes
--select 'Makes' AS '';
INSERT
INTO Makes 
VALUES (1, 'Louis', 'Garlic Beef');

INSERT
INTO Makes 
VALUES (2, 'Louis', 'BigWay Hot Pot');

INSERT
INTO Makes 
VALUES (3, 'Gordon', 'Roast Turkey');

INSERT
INTO Makes 
VALUES (4, 'Gordon', 'Beef Wellington');

INSERT
INTO Makes 
VALUES (5, 'Perry', 'Gluten Free Mushroom Pizza');

--Food
--select 'Food' AS '';

INSERT
INTO Food
VALUES ('Garlic Beef', 'Entree');

INSERT
INTO Food
VALUES ('BigWay Hot Pot', 'Entree');

INSERT
INTO Food
VALUES ('Roast Turkey', 'Entree');

INSERT
INTO Food
VALUES ('Beef Wellington', 'Entree');

INSERT
INTO Food
VALUES ('Gluten Free Mushroom Pizza', 'Entree');

--Beverages
--select 'Beverages' AS '';

INSERT
INTO Beverages
VALUES ('Beer', 1);

INSERT
INTO Beverages
VALUES ('Milk Tea', 0);

INSERT
INTO Beverages
VALUES ('Candied Bacon Bourbon', 1);

INSERT
INTO Beverages
VALUES ('Lemonade', 0);

INSERT
INTO Beverages
VALUES ('Root Beer', 0);

--Recommends
--select 'Recommends' AS '';

INSERT
INTO Recommends
VALUES ('Ryan', 'BigWay Hot Pot');

INSERT
INTO Recommends
VALUES ('Gordon', 'Beef Wellington');

INSERT
INTO Recommends
VALUES ('Perry', 'Garlic Beef');

INSERT
INTO Recommends
VALUES ('Ryan', 'Gluten Free Mushroom Pizza');

INSERT
INTO Recommends
VALUES ('Perry', 'Roast Turkey');

--Equipment
--select 'Equipment' AS '';

INSERT
INTO Equipment
VALUES ('Spatula', 'Wood');

INSERT
INTO Equipment
VALUES ('Oven', 'Electronic');

INSERT
INTO Equipment
VALUES ('Pot', 'Metal');

INSERT
INTO Equipment
VALUES ('Whisk', 'Metal');

INSERT
INTO Equipment
VALUES ('Pan', 'Metal');

--Uses
--select 'Uses' AS '';

INSERT 
INTO Uses
VALUES ('Pan', 'Metal', 1);

INSERT
INTO Uses
VALUES ('Oven', 'Electronic', 5);

INSERT
INTO Uses
VALUES ('Pot', 'Metal', 2);

INSERT
INTO Uses
VALUES ('Oven', 'Electronic', 3);

INSERT
INTO Uses
VALUES ('Pan', 'Metal', 4);

--AddOnPrice 
--select 'AddOnPrice' AS '';

INSERT
INTO AddOnPrice 
VALUES ('Fries', 1.00);

INSERT
INTO AddOnPrice 
VALUES ('Mozzarella Sticks', 1.50);

INSERT
INTO AddOnPrice 
VALUES ('Sakura Vanilla Ice Cream', 0.00);

INSERT
INTO AddOnPrice 
VALUES ('Cranberry Sauce', 1.50);

INSERT
INTO AddOnPrice 
VALUES ('Salad', 2.00);

--AddonCanHave 
--select 'AddonCanHave' AS '';

INSERT
INTO AddonCanHave 
VALUES ('Beef Wellington', 'Fries');

INSERT
INTO AddonCanHave 
VALUES ('Gluten Free Mushroom Pizza', 'Mozzarella Sticks');

INSERT
INTO AddonCanHave 
VALUES ('BigWay Hot Pot', 'Sakura Vanilla Ice Cream');

INSERT
INTO AddonCanHave 
VALUES ('Roast Turkey', 'Cranberry Sauce');

INSERT
INTO AddonCanHave 
VALUES ('Beef Wellington', 'Salad');

--Combo 
--select 'Combo' AS '';

INSERT
INTO Combo
VALUES ('Beef Wellington and Candied Bacon Bourbon', 195.58);

INSERT
INTO Combo
VALUES ('BigWay Hot Pot and Milk Tea', 33.23);

INSERT
INTO Combo
VALUES ('Gluten Free Mushroom Pizza and Lemonade', 24.91);

INSERT
INTO Combo
VALUES ('Roast Turkey and Beer', 38.21);

INSERT
INTO Combo
VALUES ('Gluten Free Mushroom Pizza and Root Beer', 22.63);

--PartOf 
--select 'PartOf' AS '';

INSERT
INTO PartOf 
VALUES ('Beef Wellington and Candied Bacon Bourbon', 'Beef Wellington');

INSERT
INTO PartOf 
VALUES ('Beef Wellington and Candied Bacon Bourbon', 'Candied Bacon Bourbon');

INSERT
INTO PartOf 
VALUES ('BigWay Hot Pot and Milk Tea', 'Milk Tea');

INSERT
INTO PartOf 
VALUES ('BigWay Hot Pot and Milk Tea', 'BigWay Hot Pot');

INSERT
INTO PartOf 
VALUES ('Gluten Free Mushroom Pizza and Lemonade', 'Gluten Free Mushroom Pizza');

INSERT
INTO PartOf 
VALUES ('Gluten Free Mushroom Pizza and Lemonade', 'Lemonade');

INSERT
INTO PartOf 
VALUES ('Roast Turkey and Beer', 'Roast Turkey');

INSERT
INTO PartOf 
VALUES ('Roast Turkey and Beer', 'Beer');

INSERT
INTO PartOf 
VALUES ('Gluten Free Mushroom Pizza and Root Beer', 'Root Beer');

INSERT
INTO PartOf 
VALUES ('Gluten Free Mushroom Pizza and Root Beer', 'Gluten Free Mushroom Pizza');
