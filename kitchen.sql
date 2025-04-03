drop table PartOf;
drop table Combo;
drop table AddOn;
drop table Beverages;
drop table Food;
drop table Makes;
drop table Uses;
drop table Equipment;
drop table Recommends;
drop table MenuItem;
drop table Has;
drop table RecipeOwns;
drop table Chef;
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

CREATE TABLE Chef (
	chef_name VARCHAR(255),
	years_of_experience INTEGER,
	seniority VARCHAR(255),
	cooking_license VARCHAR(255) NOT NULL,
	PRIMARY KEY(chef_name)
);
grant select on Chef to public;

CREATE TABLE RecipeOwns (
	recipe_ID INTEGER,
	chef_name VARCHAR(255) NOT NULL,
	recipe_name VARCHAR(255) NOT NULL,
	PRIMARY KEY(recipe_ID),
	FOREIGN KEY(chef_name) REFERENCES Chef
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

CREATE TABLE MenuItem (
	menu_item_name VARCHAR(255),
	cuisine VARCHAR(255) NULL,
	price FLOAT NOT NULL,
	dietary_restrictions VARCHAR(255) NULL,
    license_requirement VARCHAR(255) NOT NULL,
	isGourmet NUMBER(1) NOT NULL,
	PRIMARY KEY(menu_item_name)
);
grant select on MenuItem to public;

CREATE TABLE Recommends (
	chef_name VARCHAR(255),
	menu_item_name VARCHAR(255),
	PRIMARY KEY(chef_name, menu_item_name),
	FOREIGN KEY(chef_name) REFERENCES Chef
		ON DELETE CASCADE,
	FOREIGN KEY(menu_item_name) REFERENCES MenuItem
		ON DELETE CASCADE
);
grant select on Recommends to public;

CREATE TABLE Equipment (
	equipment_name VARCHAR(255),
	equipment_material VARCHAR(255),
	PRIMARY KEY(equipment_name, equipment_material)
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
	FOREIGN KEY(chef_name) REFERENCES Chef
		ON DELETE CASCADE,
	FOREIGN KEY(menu_item_name) REFERENCES MenuItem
		ON DELETE CASCADE
);
grant select on Makes to public;

CREATE TABLE Food (
	menu_item_name VARCHAR(255),
	course VARCHAR(255),
	PRIMARY KEY(menu_item_name),
	FOREIGN KEY(menu_item_name) REFERENCES MenuItem
		ON DELETE CASCADE
);
grant select on Food to public;

CREATE TABLE Beverages (
	menu_item_name VARCHAR(255),
	hasAlcohol NUMBER(1) NOT NULL,
	PRIMARY KEY(menu_item_name),
	FOREIGN KEY(menu_item_name) REFERENCES MenuItem
		ON DELETE CASCADE
);
grant select on Beverages to public;

CREATE TABLE AddOn (
    addon_name VARCHAR(255),
	menu_item_name VARCHAR(255),
    price FLOAT,
	PRIMARY KEY(menu_item_name, addon_name),
	FOREIGN KEY(menu_item_name) REFERENCES MenuItem
		ON DELETE CASCADE
);
grant select on AddOn to public;

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
	FOREIGN KEY(menu_item_name) REFERENCES MenuItem
);
grant select on PartOf to public;


--Ingredient
--select 'Ingredient' AS '';

INSERT
INTO Ingredient
VALUES ('Garlic', 1.00);

INSERT
INTO Ingredient
VALUES ('Salt', 3.35);

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
select 'Supplies' AS '';

INSERT
INTO Supplies
VALUES ('Joels Orchard', 'Apple', '01-MAR-2021');

INSERT
INTO Supplies
VALUES ('Joels Orchard', 'Salt', '01-MAR-2021');

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


--Chef
select 'Chef' AS '';

INSERT
INTO Chef
VALUES ('Ryan', 10, 'master', 'Nut');

INSERT
INTO Chef
VALUES ('Perry', 1, 'apprentice','Common');

INSERT
INTO Chef
VALUES ('Jerry', 7, 'apprentice','Nut');

INSERT
INTO Chef
VALUES ('Gordon', 20, 'master', 'Halal');

INSERT
INTO Chef
VALUES ('Gordon Sr.', 40, 'master', 'Halal');

INSERT
INTO Chef
VALUES ('William', 2, 'novice', 'Gluten');

INSERT
INTO Chef
VALUES ('Louis Jr.', 0, 'beginner','Dairy');

INSERT
INTO Chef
VALUES ('Louis Sr.', 1, 'beginner','Dairy');

INSERT
INTO Chef
VALUES ('Louis', 10000, 'master','All');

--RecipeOwns
select 'RecipeOwns' AS '';

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
select 'Has' AS '';

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

INSERT
INTO Has
VALUES (1, 'Salt', 1, 'tablespoon');

INSERT
INTO Has
VALUES (2, 'Salt', 1, 'tablespoon');

INSERT
INTO Has
VALUES (3, 'Salt', 1, 'tablespoon');

INSERT
INTO Has
VALUES (4, 'Salt', 4, 'teaspoon');

INSERT
INTO Has
VALUES (5, 'Salt', 4, 'teaspoon');

INSERT
INTO Has
VALUES (6, 'Salt', 2, 'teaspoon');

--MenuItem
--select 'MenuItem' AS '';

INSERT
INTO MenuItem
VALUES ('Garlic Beef', 'Chinese', 10.00, NULL, 'Common', 0);

INSERT
INTO MenuItem
VALUES ('BigWay Hot Pot', 'Chinese', 25.00, 'Contains Nuts', 'Nut', 0);

INSERT
INTO MenuItem
VALUES ('Roast Turkey', 'American', 45.00, 'Halal', 'Halal', 0);

INSERT
INTO MenuItem
VALUES ('Beef Wellington', 'American', 155.67, NULL, 'Common', 1);

INSERT
INTO MenuItem
VALUES ('Gluten Free Mushroom Pizza', 'Italian', 20.00, 'Gluten Free', 'Gluten', 1);

INSERT
INTO MenuItem
VALUES ('Beer', NULL, 6.50, NULL, 'Common', 0);

INSERT
INTO MenuItem
VALUES ('Milk Tea', 'Taiwanese', 7.00, 'Contains Milk', 'Dairy', 0);

INSERT
INTO MenuItem
VALUES ('Candied Bacon Bourbon', NULL, 18.00, NULL, 'Common', 1);

INSERT
INTO MenuItem
VALUES ('Lemonade', NULL, 3.25, NULL, 'Common', 0);

INSERT
INTO MenuItem
VALUES ('Root Beer', NULL, 1.50, NULL, 'Common', 0);

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
VALUES ('Gordon', 'Gluten Free Mushroom Pizza');

INSERT
INTO Recommends
VALUES ('Gordon', 'Candied Bacon Bourbon');

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

--AddOn 
--select 'AddOn' AS '';

INSERT
INTO AddOn 
VALUES ('Fries', 'Beef Wellington', 1.00);

INSERT
INTO AddOn 
VALUES ('Mozzarella Sticks', 'Gluten Free Mushroom Pizza', 1.50);

INSERT
INTO AddOn 
VALUES ('Sakura Vanilla Ice Cream', 'BigWay Hot Pot', 0.00);

INSERT
INTO AddOn 
VALUES ('Cranberry Sauce', 'Roast Turkey', 1.50);

INSERT
INTO AddOn 
VALUES ('Salad', 'Beef Wellington', 2.00);

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