-- ####################################################################
-- # Basic CREATE TABLE statement
-- # See https://www.ibm.com/docs/en/db2-for-zos/13?topic=statements-create-table for complete syntax.
-- ####################################################################
CREATE TABLE Newsletter_Subscribers (
  subscriber_id INT AUTO_INCREMENT PRIMARY KEY
  , email VARCHAR(255) NOT NULL
  , subscription_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);