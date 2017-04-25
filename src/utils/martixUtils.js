import MatrixMath from 'react-native/Libraries/Utilities/MatrixMath';

export const transformOrigin = (matrix, origin) => {
    const { x, y, z } = origin;

    const translate = MatrixMath.createIdentityMatrix();
    MatrixMath.reuseTranslate3dCommand(translate, x, y, z);
    MatrixMath.multiplyInto(matrix, translate, matrix);

    const untranslate = MatrixMath.createIdentityMatrix();
    MatrixMath.reuseTranslate3dCommand(untranslate, -x, -y, -z);
    MatrixMath.multiplyInto(matrix, matrix, untranslate);
};

export const rotateY = (dy) => {
    const radY = (Math.PI / 180) * -dy;
    const cosY = Math.cos(radY);
    const sinY = Math.sin(radY);

    return [
        cosY, 0, sinY, 0,
        0, 1, 0, 0,
        -sinY, 0, cosY, 0,
        0, 0, 0, 1
    ];
};