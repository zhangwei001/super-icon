import React, { ReactNode, useState } from 'react'
import { Toast, Button } from '@ali/infinite-ui'
import './index.less'

interface Props {
  title?: string
  padding?: string
  border?: string
  background?: string
}

export const DemoBlock: React.FC<Props> = props => {

  const [name, setName] = useState('');

  const copyText = (child: ReactNode, type: string) => {
    const childName = child.type.name ;
    let text = '';
    if (type === 'react') {
      text = `<${childName}`
      if (Object.keys(child.props).indexOf('size') < 0) {
        text += ` size={40}`;
      }
      if (Object.keys(child.props).indexOf('color') < 0) {
        text += ` color="#555"`;
      }
      Object.keys(child.props).forEach((k) => {
        if (typeof child.props[k] === 'number') {
          text += ` ${k}={${child.props[k]}}`
        } else {
          text += ` ${k}="${child.props[k]}"`
        }
      })
      text += " />";
    }
    // if (type === 'rax') {
    //   let path = childName.split(/(?=[A-Z])/).join("-").toLowerCase();
    //   text = `import ${childName} from '@ali/super-icon/icons-svg/${path}.svg';`
    // }
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    const copiedEle = React.cloneElement(child, { color: '#fff', size: 30 })
    Toast.show({
      customIcon: copiedEle,
      content: text ? '复制成功' : '复制失败',
      duration: 1500
    })

    setTimeout(() => {
      setName('');
    }, 0);
  }

  return (
    <div className="demoBlock">
      <div className="demo-title">{props.title}</div>
      <div
        className="demo-content"
        style={{
          padding: props.padding,
          background: props.background,
          border: props.border,
        }}
      >
        {
          React.Children.map(props.children, child => {
            if (!child) return;
            const childName = child.type.name ;
            
            return (
              <li className='icon-contanier' onClick={() => { copyText(child, 'react') }}>
                <div className='icon-svg'>{child}</div>
                <div className='icon-word'>{childName}</div>
              </li>
            );
          })
        }
      </div>
    </div>
  )
}

DemoBlock.defaultProps = {
  padding: '12px 12px',
  background: '#ffffff',
}
