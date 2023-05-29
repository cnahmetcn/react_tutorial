import React from 'react'

const Count = ({increment}) => {
  return (
    <div>
        <button onClick={increment}>+</button>
    </div>

    // useCallback hook u fonksiyonlar için kullanılır. Bir component içindeki bir 
    // fonksiyon bir başka component içinde kullanılıyorsa useCallback hook u ile
    // o fonksiyonu memoize edebiliriz. Böylece o fonksiyonun bağlı olduğu component
    // tekrar render edilmediği sürece o fonksiyon tekrar oluşturulmaz. Bu da
    // performans açısından önemlidir. Ayraca fonksiyon içinde setCount yerine prev 
    // yazmamızın nedeni de artırma işleminin doğru yapılaması için gerekliydi.
  )
}

export default Count