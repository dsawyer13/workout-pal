import React from 'react';
import {shallow} from 'enzyme';

import TableForm from '../TableForm.js';

describe('<TableForm />', () => {
  it('Renders without crashing', () => {
    shallow(<TableForm />);
  });

  it('Renders the passed down text', () => {
    const name = "foo";
    const weight = "bar";
    const sets = "bizz";
    const reps = "bang";
    const wrapper = shallow(<TableForm name={name} weight={weight} sets={sets} reps={reps} />);
    expect(wrapper.contains(<div class="css-xp4uvy">{name}</div>));
    expect(wrapper.contains(<input class="form-control" type="number" min="0" name="weight" placeholder="Weight" required value={weight} />));
    expect(wrapper.contains(<input class="form-control" type="number" min="0" name="sets" placeholder="Sets" required value={sets} />));
    expect(wrapper.contains(<input class="form-control" type="number" min="0" name="reps" placeholder="Reps" required value={reps} />))
  })

})
