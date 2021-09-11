import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render, screen, fireEvent} from '@testing-library/react'
import JokesService from '../../services/JokesService';
import JokesList from '.';

JokesService.fetchJoke = jest.fn(() => Promise.resolve({}));

describe('JokesList Component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should not crash', () => {
    const rootContainer = document.createElement('div');
    ReactDOM.render(<JokesList />, rootContainer);
  });

  it('should have correct jokes', async () => {
    JokesService.fetchJoke.mockReturnValue(Promise.resolve({
      results: [{
        id: 1,
        joke: 'test',
      }, {
        id: 2,
        joke: 'other',
      }]
    }));

    await act(async () => {
      render(<JokesList />);
    });

    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByText(/other/i)).toBeInTheDocument();
  });

  it('should have previous and next buttons', async () => {
    JokesService.fetchJoke.mockReturnValue(Promise.resolve({
      results: [{
        id: 1,
        joke: 'test',
      }]
    }));

    await act(async () => {
      render(<JokesList />);
    });

    expect(screen.getByText(/Previous/i)).toBeInTheDocument();
    expect(screen.getByText(/Next/i)).toBeInTheDocument();
  });

  it('should handle next and prev button click', async () => {
    JokesService.fetchJoke.mockReturnValue(Promise.resolve({
      results: [{
        id: 1,
        joke: 'test',
      }],
      total_pages: 10,
    }));

    await act(async () => {
      render(<JokesList />);
    });

    const nextButton = screen.getByText('Next');
    const prevButton = screen.getByText('Previous');
    await act(async() => {
      fireEvent.click(nextButton);
    });
    expect(screen.getByText('2 / 10')).toBeInTheDocument()
    expect(JokesService.fetchJoke).toBeCalledWith({ page: 2, limit: 3 });

    await act(async() => {
      fireEvent.click(nextButton);
    });
    expect(screen.getByText('3 / 10')).toBeInTheDocument()
    expect(JokesService.fetchJoke).toBeCalledWith({ page: 3, limit: 3 });

    await act(async() => {
      fireEvent.click(prevButton);
    });
    expect(screen.getByText('2 / 10')).toBeInTheDocument()
    expect(JokesService.fetchJoke).toBeCalledWith({ page: 2, limit: 3 });
  });
});
