use postgres::{NoTls, Client}; 
fn main() {
    let mut client = Client::connect("host=localhost user=postgres", NoTls).unwrap();
    client.batch_execute("
    CREATE TABLE user (
        id  SERIAL PRIMARY KEY,
        username TEXT NOT NULL,
        password,
    )
");
}
