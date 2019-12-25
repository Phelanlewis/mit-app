CREATE TABLE mitresponses (
  ID SERIAL PRIMARY KEY,
  users VARCHAR(255) NOT NULL,
  didyesterday VARCHAR(255) NOT NULL,
  didyoumiss VARCHAR(255) NOT NULL,
  mostimportanttask VARCHAR(255) NOT NULL,
  comingupagainst VARCHAR(255) NOT NULL,
  fixit VARCHAR(255) NOT NULL,
  goodthing VARCHAR(255) NOT NULL,
  doingnext VARCHAR(255) NOT NULL,
);
