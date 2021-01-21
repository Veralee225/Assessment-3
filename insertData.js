// we use pg library to
// request connection pool from postgres database
// psql -h traineedb.cgq0reqixqsd.us-east-1.rds.amazonaws.com -d postgres -U traineeUser password is traineePassword
const { Pool } = require('pg')

// we connect to pg using pool we requested
const pool = new Pool({
  user: 'traineeUser',
  host: 'traineedb.cgq0reqixqsd.us-east-1.rds.amazonaws.com',
  password: 'traineePassword',
  database: 'postgres',
  port: 5432,
  multipleStatements: true
})

// the pool emits an error on behalf of any idle clients
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

// if no error on idel client, pool connects to database
pool.connect((err, client, done) => {
    //if there is an error with our database connection strings
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    //if no error then we have successfully connected
    console.log('Connected to database');
    // do not call done(); - because we want to use this connection
    // to create/insert/delete or select records from our database
    // sometime we might also want to export this connection for other resources
});

// insert a record into our table
pool.query(
    `INSERT INTO UserVera2021
                 (ID, FIELDS, DATA_TYPES, SAMPLE_DATA)
                 VALUES
                 ('1', 'FullName', 'text', 'Vera Adiele'),
                 ('2', 'Email', 'email', 'adielevera226@gmail.com'),
                 ('3', 'Password', 'password', 'Training2021'),
                 ('4', 'Mobile number', 'number', '08065241846'),
                 ('5', 'Company name', 'text', 'Vera's Company & co'),
                 ('6', 'Zip code', 'number', '599000'),
                 ('7', 'Level', 'text', 'Manager'),
                 ('8', 'Time Clock Pin', 'number', '347802'),
                 ('9', 'Location', 'text', 'US'),
                 ('10', 'Wage Rate', 'number', '$100'),
                 ('11', 'Labor', 'text', 'Manager'),
                 ('12', 'Role, 'text', 'Cashier'),
                 ('13', 'Start Date', 'date', '22/01/2021'),
                 ('14', 'Birthday', 'date', '12/03/1987'),
                 ('15', 'Emergency Contact Number', 'number', '12356909'),
                 ('16', 'Emergency Contact Name', 'text', 'Jessica'),
                 ('17', 'Injury log', 'text', 'Bruised finger')
                 `,
    (err, res) => {
      if(err) {
        console.log('Error or issue with table creation');
    } else {
        console.log('Inserted data into table successfully')
        console.log(res);
   }
  }
);

pool.end();


// export connection
module.exports = pool;
