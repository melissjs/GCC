import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';
import moxios from 'moxios';
import moxiosResponse from './moxios_res.js';

describe('App' , () => {
  let component;

  beforeEach(() => {
    console.log('moxiosResponse', moxiosResponse)
    moxios.install();
    moxios.stubRequest('https://brooklyn.gaia.com/videos/term/119931', 
      {
        status: 200,
        response: moxiosResponse
      }
  );
    component = renderComponent(App);
    console.log(moxiosResponse)
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('renders something', (done) => {
    setTimeout(() => {
      component.update();
      expect(component).to.exist;
      done();
      component.unmount();
    }, 3000);
  });
});
