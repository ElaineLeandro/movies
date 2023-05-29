import styled  from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100px;
    height: 24px;

    border:none;
    border-radius: 8px;

    background-color: ${({theme})=> theme.COLORS. BACKGROUND_800};
    color: ${({theme})=> theme.COLORS.GRAY_100};

    inline-size: max-content;
    font-family: Roboto;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    
    justify-content: center;
    align-items: center;
    padding: 0 16px;
`