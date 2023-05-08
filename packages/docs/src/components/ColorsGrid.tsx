import React from 'react'
import { colors } from '@doctero-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      {/** Primary */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column',  
          alignItems: 'flex-start',
          width: '100%'  
        }}
      >
        <h2 style={{ fontFamily: 'monospace', color: '#FFF', fontSize: '1.5rem', lineHeight: 1.625, marginBottom: '1rem' }}>Primary</h2>
        
        {Object.entries(colors.primary).map(([key, color]) => (
          <div key={key} style={{ backgroundColor: color, padding: '2rem', width: '100%' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'monospace',
                color: '#FFF'  
              }} 
            >
              <strong>${key}</strong>
              <span style={{ fontWeight: 600 }}>{color}</span>
            </div>
          </div>
        ))}   
      </div>

      {/** Secondary */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column',  
          alignItems: 'flex-start',
          width: '100%'  
        }}
      >
        <h2 style={{ fontFamily: 'monospace', color: '#FFF', fontSize: '1.5rem', lineHeight: 1.625, marginBottom: '1rem' }}>Secondary</h2>
        
        {Object.entries(colors.secondary).map(([key, color]) => (
          <div key={key} style={{ backgroundColor: color, padding: '2rem', width: '100%' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'monospace',
                color: '#FFF'  
              }} 
            >
              <strong>${key}</strong>
              <span style={{ fontWeight: 600 }}>{color}</span>
            </div>
          </div>
        ))}   
      </div>

      {/** Black */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column',  
          alignItems: 'flex-start',
          width: '100%'  
        }}
      >
        <h2 style={{ fontFamily: 'monospace', color: '#FFF', fontSize: '1.5rem', lineHeight: 1.625, marginBottom: '1rem' }}>Black</h2>

        <div style={{ backgroundColor: colors.black, padding: '2rem', width: '100%' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'monospace',
              color: '#FFF'  
            }} 
          >
            <strong>$black</strong>
            <span style={{ fontWeight: 600 }}>{colors.black}</span>
          </div>
        </div> 
      </div> 

      {/** White */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column',  
          alignItems: 'flex-start',
          width: '100%'  
        }}
      >
        <h2 style={{ fontFamily: 'monospace', color: '#FFF', fontSize: '1.5rem', lineHeight: 1.625, marginBottom: '1rem' }}>White</h2>
        
        <div style={{ backgroundColor: colors.white, padding: '2rem', width: '100%' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'monospace',
              color: getContrast(colors.white, '#FFF') < 3.5 ? '#000' : '#FFF',  
            }} 
          >
            <strong>$white</strong>
            <span style={{ fontWeight: 600 }}>{colors.white}</span>
          </div>
        </div>
      </div>  

      {/** Gray */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column',  
          alignItems: 'flex-start',
          width: '100%'  
        }}
      >
        <h2 style={{ fontFamily: 'monospace', color: '#FFF', fontSize: '1.5rem', lineHeight: 1.625, marginBottom: '1rem' }}>Gray</h2>
        
        {Object.entries(colors.gray).map(([key, color]) => (
          <div key={key} style={{ backgroundColor: color, padding: '2rem', width: '100%' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'monospace',
                color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',  
              }} 
            >
              <strong>${key}</strong>
              <span style={{ fontWeight: 600 }}>{color}</span>
            </div>
          </div>
        ))}   
      </div>

      {/** Green */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column',  
          alignItems: 'flex-start',
          width: '100%'  
        }}
      >
        <h2 style={{ fontFamily: 'monospace', color: '#FFF', fontSize: '1.5rem', lineHeight: 1.625, marginBottom: '1rem' }}>Green</h2>
        
        {Object.entries(colors.green).map(([key, color]) => (
          <div key={key} style={{ backgroundColor: color, padding: '2rem', width: '100%' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'monospace',
                color: getContrast(color, '#FFF') < 3 ? '#000' : '#FFF',  
              }} 
            >
              <strong>${key}</strong>
              <span style={{ fontWeight: 600 }}>{color}</span>
            </div>
          </div>
        ))}   
      </div>

      {/** Blue */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column',  
          alignItems: 'flex-start',
          width: '100%'  
        }}
      >
        <h2 style={{ fontFamily: 'monospace', color: '#FFF', fontSize: '1.5rem', lineHeight: 1.625, marginBottom: '1rem' }}>Blue</h2>
        
        {Object.entries(colors.blue).map(([key, color]) => (
          <div key={key} style={{ backgroundColor: color, padding: '2rem', width: '100%' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'monospace',
                color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF', 
              }} 
            >
              <strong>${key}</strong>
              <span style={{ fontWeight: 600 }}>{color}</span>
            </div>
          </div>
        ))}   
      </div>

      {/** Cyan */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column',  
          alignItems: 'flex-start',
          width: '100%'  
        }}
      >
        <h2 style={{ fontFamily: 'monospace', color: '#FFF', fontSize: '1.5rem', lineHeight: 1.625, marginBottom: '1rem' }}>Cyan</h2>
        
        {Object.entries(colors.cyan).map(([key, color]) => (
          <div key={key} style={{ backgroundColor: color, padding: '2rem', width: '100%' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'monospace',
                color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',  
              }} 
            >
              <strong>${key}</strong>
              <span style={{ fontWeight: 600 }}>{color}</span>
            </div>
          </div>
        ))}   
      </div>

      {/** Purple */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column',  
          alignItems: 'flex-start',
          width: '100%'  
        }}
      >
        <h2 style={{ fontFamily: 'monospace', color: '#FFF', fontSize: '1.5rem', lineHeight: 1.625, marginBottom: '1rem' }}>Purple</h2>
        
        {Object.entries(colors.purple).map(([key, color]) => (
          <div key={key} style={{ backgroundColor: color, padding: '2rem', width: '100%' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'monospace',
                color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',  
              }} 
            >
              <strong>${key}</strong>
              <span style={{ fontWeight: 600 }}>{color}</span>
            </div>
          </div>
        ))}   
      </div>

      {/** Danger */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column',  
          alignItems: 'flex-start',
          width: '100%'  
        }}
      >
        <h2 style={{ fontFamily: 'monospace', color: '#FFF', fontSize: '1.5rem', lineHeight: 1.625, marginBottom: '1rem' }}>Danger</h2>
        
        {Object.entries(colors.danger).map(([key, color]) => (
          <div key={key} style={{ backgroundColor: color, padding: '2rem', width: '100%' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'monospace',
                color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',  
              }} 
            >
              <strong>${key}</strong>
              <span style={{ fontWeight: 600 }}>{color}</span>
            </div>
          </div>
        ))}   
      </div>

      {/** Orange */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column',  
          alignItems: 'flex-start',
          width: '100%'  
        }}
      >
        <h2 style={{ fontFamily: 'monospace', color: '#FFF', fontSize: '1.5rem', lineHeight: 1.625, marginBottom: '1rem' }}>Orange</h2>
        
        {Object.entries(colors.orange).map(([key, color]) => (
          <div key={key} style={{ backgroundColor: color, padding: '2rem', width: '100%' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'monospace',
                color: getContrast(color, '#FFF') < 2.5 ? '#000' : '#FFF',  
              }} 
            >
              <strong>${key}</strong>
              <span style={{ fontWeight: 600 }}>{color}</span>
            </div>
          </div>
        ))}   
      </div>

      {/** Transparent */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column',  
          alignItems: 'flex-start',
          width: '100%'  
        }}
      >
        <h2 style={{ fontFamily: 'monospace', color: '#FFF', fontSize: '1.5rem', lineHeight: 1.625, marginBottom: '1rem' }}>Transparent</h2>
        
        <div style={{ backgroundColor: colors.transparent, padding: '2rem', width: '100%' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'monospace',
              color: '#FFF'  
            }} 
          >
            <strong>$transparent</strong>
            <span style={{ fontWeight: 600 }}>{colors.transparent}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

