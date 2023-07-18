import styles from "styled-components";

export const StyledDivAboutMe = styles.div`
    margin-top: 2rem;

    padding: 14px 1rem;

    color: white;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    font-family: var(--fonts-texts);


    @media(min-width:1238px){

        padding: 14px 62px;
        
        P {
            width: 60%;
        }
    }


    @media(min-width:1303px){
        padding: 14px 5rem;
    }

    @media (min-width: 1414px) {

    padding: 14px 8rem;

    }

    @media (min-width: 1494px) {
    padding: 14px 10rem;
    }


   
`;
