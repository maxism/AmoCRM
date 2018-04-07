import AmoCRM from '../src/AmoCRM';
import { connection } from './support/config';


describe( 'AmoCRM connection', () => {

  it( 'should connect with hash', done => {
    const { domain, auth: { hash, login }} = connection,
      client = new AmoCRM({
        connection: {
          domain,
          auth:{
            hash, login
          }
        }
      });
    client
      .connect()
      .then( isConnected => {
        expect( isConnected ).toBe( true );
        done();
      });
  });

  it( 'should connect with password', done => {
    const { domain, auth: { password, login }} = connection,
      client = new AmoCRM({
        connection: {
          domain,
          auth:{
            password, login
          }
        }
      });
    client
      .connect()
      .then( isConnected => {
        expect( isConnected ).toBe( true );
        done();
      });
  });

  it( 'should connect twice without error', done => {
    const { domain, auth: { hash, login }} = connection,
      client = new AmoCRM({
        connection: {
          domain,
          auth:{
            hash, login
          }
        }
      });

    client
      .connect()
      .then(() => client.connect())
      .then( isConnected => {
        expect( isConnected ).toBe( true );
        done();
      });
  });
});
