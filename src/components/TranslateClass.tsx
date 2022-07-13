import React, { Component } from 'react'
import { Trans, withTranslation } from 'react-i18next'
import '../i18n/Localization'

class TranslateClass extends Component<any> {
  render() {
    const { t } = this.props;

    return (<div>
        <Trans><h3>Localize With i18Next</h3></Trans>
        <div>{t('title')}</div>
        <div>{t('welcome', 
            { firstname: "Roberto", lastname: "Ajolfi"})}
        </div>
        <div>{t('today', { date: new Date()})}</div>
        <div>{t('feeling', { feeling: 'Happy'})}</div>
    </div>)
  }
}

export default withTranslation()(TranslateClass);   // HOC !