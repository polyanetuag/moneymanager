import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
  `;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    display: inline-block;
    color: white;
    margin-left: 10px;
  }

  img {
    transform: translateY(20px);
	  z-index: 1;
    animation: buildingBottom 1s 0.1s ease-in forwards;

    @keyframes buildingBottom {
	    0% { transform: translateY(20px) }
	    100% { transform: translateY(0) }
}
}


  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;