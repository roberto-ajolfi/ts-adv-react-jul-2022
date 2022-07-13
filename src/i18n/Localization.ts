import i18next from 'i18next';
import moment from 'moment';
import { initReactI18next } from 'react-i18next'; 
import translationEN from './en-EN.json';
import translationIT from './it-IT.json';

const translations = {
    en : { translation: translationEN },
    it : { translation: translationIT }
};

i18next
.use(initReactI18next)
.init({
    lng: 'it',
    fallbackLng: 'en',
    debug: true,
    resources: translations,
    interpolation: {
        format: function(value, format, lng) {
            if (format === 'uppercase') return value.toUpperCase();
            if(value instanceof Date) return moment(value).format(format);
            return value;
        }
    }
});

export default i18next;