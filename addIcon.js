/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

const setArgs = new Set(args);
if (args.length !== setArgs.size) {
  let repeatArr = [];
  args.map((arg, i) => {
    if (args.indexOf(arg) !== i) repeatArr.push(arg);
  });

  console.log(chalk.red('创建失败: 不要同时传入相同的IconName => ', ...repeatArr));
  return;
}

function jundgeExistIcon(args) {
  // eslint-disable-next-line no-undef
  const demoPath = path.join(__dirname, 'src/icons-react/demos/index.tsx');
  return new Promise((resolve, reject) => {
    fs.readFile(demoPath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      let repeatArr = [];
      args.map(arg => {
        const compName = new RegExp(
          'Icon' +
            arg
              .split('-')
              .map(val => {
                return val.charAt(0).toUpperCase() + val.substring(1);
              })
              .join('')
        );

        if (compName.test(data)) repeatArr.push(arg);
      });

      if (repeatArr.length > 0) {
        console.log(chalk.red('创建失败: 不要传入与存量icon相同的IconName => ', ...repeatArr));
        resolve(true);
      }

      resolve(false);
    });
  });
}

function generateFile(iconName) {
  const compName = iconName
    .split('-')
    .map(val => {
      return val.charAt(0).toUpperCase() + val.substring(1);
    })
    .join('');

  // 定义要生成的 TSX 文件内容
  const file1Content = `import React ,{createElement} from 'react';
import { defaultIconProps, IconProps } from '../../utils';
import { ReactComponent as Icon${compName}Svg } from '../../svg/icon-${iconName}.svg';

export function Icon${compName}({
  size = defaultIconProps.size,
  color = defaultIconProps.color,
}: IconProps){
  const styles = {
    width: size,
    height: size,
    fill: color,
  };
  return (
    <div style={styles}>
      <Icon${compName}Svg />
    </div>
  );
};
`;

  const tsxfilePath = path.join(__dirname, 'src', 'icons-react', 'components', `i-${iconName}.tsx`);
  const svgfilePath = path.join(__dirname, 'src', 'svg', `icon-${iconName}.svg`);

  const svgContent = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg">

</svg>
  `;

  // 生成svg.tsx
  fs.writeFile(tsxfilePath, file1Content, err => {
    if (err) throw err;
    console.log(chalk.green(`${tsxfilePath}.tsx generated.`));
  });

  // 生成svg
  fs.writeFile(svgfilePath, svgContent, err => {
    if (err) throw err;
    console.log(chalk.green(`${svgfilePath}.tsx generated.`));
  });
}

function addDemoCode(args) {
  // eslint-disable-next-line no-undef
  const demoPath = path.join(__dirname, 'src/icons-react/demos/index.tsx');
  const regExpImport = /'components'/;
  const regExpRender = /\/DemoBlock/;

  fs.readFile(demoPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    const lines = data.split('\n');
    const index = lines.findIndex(line => regExpImport.test(line));
    const indexRender = lines.findIndex(line => regExpRender.test(line));

    const renderArr = args.map(arg => {
      const compName = arg
        .split('-')
        .map(val => {
          return val.charAt(0).toUpperCase() + val.substring(1);
        })
        .join('');
      return `        <Icon${compName} />`;
    });

    const importArr = args.map(arg => {
      const compName = arg
        .split('-')
        .map(val => {
          return val.charAt(0).toUpperCase() + val.substring(1);
        })
        .join('');
      return `  Icon${compName},`;
    });

    if (indexRender !== -1) {
      lines.splice(indexRender, 0, ...renderArr);
    }
    if (index !== -1) {
      lines.splice(index, 0, ...importArr);
    }

    const modifiedContent = lines.join('\n');

    fs.writeFile(demoPath, modifiedContent, 'utf8', err => {
      if (err) {
        throw err;
      }
      console.log(chalk.green(`import demo successfully.`));
    });
  });

  const indexPath = path.join(__dirname, 'src/icons-react/index.ts');
  const backend = /^s*$/;

  fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    const lines = data.split('\n');

    const index = lines.findIndex(line => backend.test(line));

    const exportArr = args.map(arg => {
      const compName = arg
        .split('-')
        .map(val => {
          return val.charAt(0).toUpperCase() + val.substring(1);
        })
        .join('');
      return `export { Icon${compName}} from './components/i-${arg}';`;
    });

    if (index !== -1) {
      lines.splice(index, 0, ...exportArr);
    } else {
      lines.append(...exportArr);
    }

    const modifiedContent = lines.join('\n');

    fs.writeFile(indexPath, modifiedContent, 'utf8', err => {
      if (err) {
        throw err;
      }
      console.log(chalk.green(`export demo successfully.`));
    });
  });
}

jundgeExistIcon(args).then(res => {
  if (!res) {
    args.forEach(arg => {
      generateFile(arg);
    });

    //修改demo
    addDemoCode(args);
  }
});
