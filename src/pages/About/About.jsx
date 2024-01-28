import React from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';

const About = () => {
    return (
        <div className='container'>
            <Typography variant="h4" gutterBottom>
                Mint Cosmetics – Save The Best For You
            </Typography>
            <Typography variant="body1">
                Chỉ là một câu chuyện nhỏ để các bạn hiểu được mình sẽ tìm được gì tại mint..
            </Typography>

            <Typography variant="h5" sx={{ mt: 2 }}>
                Tại sao mint cosmetics lại chỉ muốn là một cửa hàng nhỏ chứ không phải một drugstore?
            </Typography>
            <Typography variant="body1">
                “Save The Best For You” – Slogan cũng như định hướng hoạt động của mint. Chúng mình làm việc với mục tiêu và định hướng là mang đến những sản phẩm tốt nhất đến tay mỗi người. Nên có thể tại Mint bạn không thể tìm thấy đa dạng sản phẩm như ở một drugstore, bởi vì những gì “tốt nhất”, Mint đã “chọn lọc” sẵn cho các bạn rồi :).
            </Typography>

            <Typography variant="h5" sx={{ mt: 2 }}>
                Làm thế nào để thực hiện điều đó?
            </Typography>
            <Typography variant="body1">
                Sản phẩm của mint không nhất thiết phải là sản phẩm có công dụng tốt nhất mà phải phù hợp 3 tiêu chí của bọn mình: Chất lượng, Giá thành và Phù hợp.
            </Typography>

            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">Nguồn gốc, chất lượng</Typography>
                    <Typography variant="body2">
                        Việc xem qua hầu hết những review khen hay chê, đặc biệt là việc testing sản phẩm trước khi đăng bán cũng như việc chọn nguồn hàng chất lượng có vẻ đơn giản nhưng lại tốn nhiều thời gian và cũng là công việc “khó khăn” nhất đối với chúng mình.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">Chi phí, Giá thành</Typography>
                    <Typography variant="body2">
                        Sản phẩm tốt không hẳn phải đắt nhất, mà đối với mint đó là sản phẩm đạt chất lượng tốt nhất so với khoảng giá hiện tại. Việc check giá cả tất cả những sản phẩm cùng loại để chọn ra cái gì phù hợp cái gì không cũng là điều làm chúng mình đau đầu trước khi rinh em ý về trên kệ hàng.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">Phù hợp với từng người</Typography>
                    <Typography variant="body2">
                        Nếu đã mua hàng tại mint lâu thì chắc bạn không lạ gì về việc có những sản phẩm mint không nhập bán nữa mặc dù có nhiều người hỏi. Chúng mình luôn để ý đến những review của người dùng là chính các bạn để điều chỉnh về hàng hóa. Hàng mint không nhập lại không có nghĩa là sản phẩm đó mint không thể nhập được hoặc không có ai mua. Mà đo đơn giản là những sản phẩm không còn đạt được đủ tiêu chí của bọn mình là tốt về cả chất lượng với khoảng giá đó, hoặc không cho kết quả sử dụng tốt với mọi người.
                    </Typography>
                </Grid>
            </Grid>

            <Typography variant="h5" sx={{ mt: 2 }}>
                Bạn sẽ tìm được gì ở mint?
            </Typography>
            <Typography variant="body1">
                Vậy đó, mint chỉ là một cửa hàng nhỏ không phải một siêu thị mỹ phẩm nên các bạn chỉ tìm được những sản phẩm ĐÃ ĐƯỢC CHỌN LỌC trên kệ của chúng mình mà thôi. Mint cũng không phải là một cửa hàng chuyên Pháp, chuyên Anh hoặc Mỹ, Nhật… Chỉ đơn giản là nơi nào có sản phẩm tốt phù hợp với tiêu chí ban đầu đã đặt ra thì mint sẽ cố gắng có được trên kệ của mình cho mọi người.
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
                Không phải ai cũng có đủ kiến thức để làm chuyên gia về skincare hay makeup để chọn cho chính bạn những sản phẩm phù hợp nhất. Tại mint, chúng mình luôn cố gắng để mọi người không phải nghĩ về vấn đề đó. Chỉ việc đến cửa hàng để Mint có thể tư vấn giúp bạn hoặc đôi khi đơn giản là bạn “chọn bừa”, bạn vẫn sẽ có được sản phẩm “tốt” dành cho riêng bạn.
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
                PS: Mọi reviews dù khen chê cũng giúp mint thêm thông tin trong việc chọn lọc sản phẩm đến với mọi người và cải thiện dịch vụ của mình hơn. Chúng mình rất cảm ơn nếu bạn bớt chút thời gian để lại Reviews về sản phẩm, dịch vụ.. hoặc bất kỳ điều gì khác mà bạn muốn. Cái mint cần không phải là 5* mà là cách giúp chúng mình cải thiện về sản phẩm và khiến mọi người hài lòng hơn.
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
                Chúc các bạn luôn tìm được thứ tốt nhất cho mình tại cửa hàng nhỏ này.
            </Typography>

            <Box sx={{ mt: 2 }}>
                <Typography variant="body1">
                    Để biết thêm về cách thức mua hàng và tư vấn mua hàng, các bạn liên hệ với chúng mình qua Contact này nhé: 098.257.6363 – 091.111.8356
                </Typography>
            </Box>

            <Typography variant="body1" sx={{ mt: 2 }}>
                Mint Cosmetics – cam kết chỉ bán mỹ phẩm chính hãng, có nguồn gốc rõ ràng.
            </Typography>

            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1">
                        CS1: Số 23 Lê Văn Lương, Quận Thanh Xuân, Hà Nội
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1">
                        CS2: Số 161 Chùa Láng, Quận Đống Đa, Hà Nội
                    </Typography>
                </Grid>
                {/* Add more addresses as needed */}
            </Grid>

            <Typography variant="body1" sx={{ mt: 2 }}>
                Website: <a href="https://www.mint07.com/">https://www.mint07.com/</a>
            </Typography>

            {/* Additional content goes here */}
        </div>
    );
};

export default About;
