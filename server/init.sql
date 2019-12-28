CREATE TABLE mitresponses (
  ID SERIAL PRIMARY KEY,
  date_col DATE,
  users VARCHAR(255),
  didyesterday TEXT,
  didyoumiss TEXT,
  mostimportanttask TEXT,
  comingupagainst TEXT,
  fixit TEXT,
  goodthing TEXT,
  doingnext TEXT
);
