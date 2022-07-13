import React from 'react'
import { Trans, useTranslation } from 'react-i18next';
import '../i18n/Localization';

export const TranslateFunc = () => {
    const { t, i18n } = useTranslation(); // HOOK !

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };
    
    return (<div>
        <Trans><h2>Localize With i18Next</h2></Trans>
        <div>{t('title')}</div>
        <div>{t('welcome', 
            { firstname: "Roberto", lastname: "Ajolfi"})}
        </div>
        <div>{t('today', { date: new Date()})}</div>
        <div>{t('feeling', { feeling: 'Happy'})}</div>
        <div>
            <button className='btn btn-primary' onClick={() => changeLanguage('it')}>ITA</button>
            <button className='btn btn-success' onClick={() => changeLanguage('en')}>ENG</button>
        </div>
    </div>)
}
