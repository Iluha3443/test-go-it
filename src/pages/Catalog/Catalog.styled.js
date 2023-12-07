import styled from 'styled-components';

export const CatalogContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    padding-left:128px;
    padding-right:128px;
    gap: 20px;
    margin-bottom:100px;

    img{
        width:274px;
        height:268px;
        margin-bottom:14px;
        
    }

    .car-info{
        max-width:274px;
        max-height:426px;
        margin-bottom:50px;
    }
`;

export const SettingsContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    padding-left:128px;
    padding-right:128px;
    gap: 20px;
    margin-top: 20px;
`;

export const LoadMore = styled.button`
    margin: auto;
    
`;

export const Container = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
`;
