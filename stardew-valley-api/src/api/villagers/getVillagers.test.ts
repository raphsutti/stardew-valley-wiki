import { agentFromRouter } from 'src/testing/server';

import { villagerRouter } from '.';

const agent = agentFromRouter(villagerRouter);

describe('getJobsHandler', () => {
  it('provides no results on first load', () => agent.get('/').expect(200, []));
});
