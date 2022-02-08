import { newSpecPage, SpecPage } from '@stencil/core/testing';

import { AnaButton } from '../../atoms/ana-button/ana-button';
import { AnaVotes } from './ana-votes';

describe('atoms/ana-votes', () => {
  let votes;

  describe('Votes flow', () => {
    beforeEach(() => {
      votes = new AnaVotes();
      votes.totalVotes = 0;
    });

    it('should increment votes', () => {
      expect(votes.totalVotes).toEqual(0);
      votes.buttonClickedHandler({ detail: 'incrementButton' } as any);
      expect(votes.totalVotes).toEqual(1);
    });

    it('should decrement votes', () => {
      expect(votes.totalVotes).toEqual(0);
      votes.buttonClickedHandler({ detail: 'decrementButton' } as any);
      expect(votes.totalVotes).toEqual(-1);
    });

    it('should increment a downvote vote', () => {
      votes.totalVotes = -1;
      votes.vote = -1;
      expect(votes.totalVotes).toEqual(-1);
      votes.buttonClickedHandler({ detail: 'incrementButton' } as any);
      expect(votes.totalVotes).toEqual(1);
    });

    it('should decrement an upvote vote', () => {
      votes.totalVotes = 1;
      votes.vote = 1;
      expect(votes.totalVotes).toEqual(1);
      votes.buttonClickedHandler({ detail: 'decrementButton' } as any);
      expect(votes.totalVotes).toEqual(-1);
    });

    it('should prevent to upvote twice', () => {
      votes.totalVotes = 1;
      votes.vote = 1;
      expect(votes.totalVotes).toEqual(1);
      votes.buttonClickedHandler({ detail: 'incrementButton' } as any);
      expect(votes.totalVotes).toEqual(1);
    });

    it('should prevent to downvote twice', () => {
      votes.totalVotes = -1;
      votes.vote = -1;
      expect(votes.totalVotes).toEqual(-1);
      votes.buttonClickedHandler({ detail: 'decrementButton' } as any);
      expect(votes.totalVotes).toEqual(-1);
    });
  });

  describe('Buttons actions', () => {
    let page: SpecPage;

    beforeEach(async () => {
      page = await newSpecPage({
        components: [AnaVotes, AnaButton],
        html: `<ana-votes total-votes="0"></ana-votes>`,
      });
    });

    it('should increment votes', async () => {
      expect(page.root.shadowRoot.querySelector('.total').textContent).toBe('0');
      const btn = page.root.shadowRoot.querySelector('ana-button button') as HTMLButtonElement;
      btn.click();
      await page.waitForChanges();
      expect(page.root.shadowRoot.querySelector('.total').textContent).toBe('1');
    });
  });

  describe('Votes placeholder', () => {
    let page: SpecPage;

    it('should format thousands', async () => {
      page = await newSpecPage({
        components: [AnaVotes],
        html: `<ana-votes total-votes="12345"></ana-votes>`,
      });
      expect(page.root.shadowRoot.querySelector('.total').textContent).toBe('12.3K');
    });

    it('should format millions', async () => {
      page = await newSpecPage({
        components: [AnaVotes],
        html: `<ana-votes total-votes="1234567"></ana-votes>`,
      });
      expect(page.root.shadowRoot.querySelector('.total').textContent).toBe('1.2M');
    });

    it('should round up big numbers', async () => {
      page = await newSpecPage({
        components: [AnaVotes],
        html: `<ana-votes total-votes="123489000"></ana-votes>`,
      });
      expect(page.root.shadowRoot.querySelector('.total').textContent).toBe('123.5M');
    });
  });
});
